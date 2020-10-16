"use strict";
let viewAPI;
import { getData, postData, deleteData, updateData } from "./utilsAPI.js";
import create_dynamic_HTML_table from "./utilsHTML.js";
const FILM_PROPERTIES = ["id", "title", "duration", "producer", "budget"];
const CALL_API_DELAY = 3000;
let isChanged = false;
const API_NAME = "/films";
let token=undefined;


const initialRenderOfComponents = () => {
  //per default, hide the login component, unless there is a token in localstorage
  //Note that in this exercice you can consider that the token is always valid if
  //it is found in the localStorage. This is a simplification...
  let token = localStorage.getItem("token");
  if (token) {
    GlobalRenderWhenAuthenticated();
    return token;
 
  } else {
    GlobalRenderWhenNotAuthenticated();
    return;
  }
};

const GlobalRenderWhenAuthenticated = () => {
  $("#login_board").html("");
  $("#login_component").hide();
  $("#film_add_component").hide();
  $("#film_view_component").hide();
  $("#film_view_menu_item").hide();
  $("#film_view_menu_item").show();
  $("#film_add_menu_item").show();
  $("#logout_menu_item").show();
};

const GlobalRenderWhenNotAuthenticated = (errorMessage = "") => {
  $("#login_component").show();

  $("#login_board").html(errorMessage);

  if (errorMessage === "") $("#login_board").hide();
  else $("#login_board").show();

  //hide the other components
  $("#film_add_component").hide();
  $("#film_view_component").hide();
  $("#film_view_menu_item").hide();
  $("#film_add_menu_item").hide();
  $("#logout_menu_item").hide();

  //clear any API call
  clearInterval(viewAPI);
};

const ViewRenderWhenAuthenticated = (url, token) => {
  $("#login_component").hide();
  $("#film_add_component").hide();
  $("#film_view_component").show();
  $("#film_view_menu_item").show();
  $("#film_add_menu_item").show();
  // consume the API every 3 seconds
  viewAPI = setInterval(getAPIAndRender, CALL_API_DELAY);
};

const AddRenderWhenAuthenticated = () => {
  $("#login_component").hide();
  $("#film_view_component").hide();
  //clear any API call
  clearInterval(viewAPI);
  $("#film_add_component").show();
  $("#film_view_menu_item").show();
  $("#film_add_menu_item").show();
};

$(document).ready(function() {
  token = initialRenderOfComponents();
  

  // deal with login query
  $("#login_form").submit(e => {
    e.preventDefault();
    if ($("#email1")[0].checkValidity() && $("#password1")[0].checkValidity()) {
      const data = {
        email: $("#email1").val(),
        password: $("#password1").val()
      };
      postData("/login", data, token, onPostLogin, onErrorLogin);
    } else {
      alert("Please provide valid credentials.");
    }
  });

  //Attach a click handler to the register form
  $("#film_add_form").submit(function(e) {
    // this prevent the form to be sent to the API
    e.preventDefault();
    // if the form is valid, POST the form data to the API

    if (
      $("#title")[0].checkValidity() &&
      $("#duration")[0].checkValidity() &&
      $("#producer")[0].checkValidity() &&
      $("#budget")[0].checkValidity()
    ) {
      const data = {
        title: $("#title").val(),
        duration: $("#duration").val(),
        producer: $("#producer").val(),
        budget: $("#budget").val()
      };

      postData(
        API_NAME,
        data,
        token,
        function() {
          // success, therefore clear the form
          $("input").val("");
        },
        onError
      );
    }
  });

  $("#film_view_menu_item").click(e => {
    e.preventDefault();
    ViewRenderWhenAuthenticated(API_NAME, token);
  });

  $("#film_add_menu_item").click(e => {
    e.preventDefault();
    AddRenderWhenAuthenticated();
  });

  $("#logout_menu_item").click(e => {
    e.preventDefault();
    //remove the token from localStorage
    localStorage.removeItem("token");
    token = undefined;
    GlobalRenderWhenNotAuthenticated();
  });
});

function getAPIAndRender() {
  //call the GET /films API
  getData(API_NAME, token, onGet,onError);    
}

const onDelete = id => {
  deleteData(API_NAME + "/" + id, token);
};

const onSave = (id, item) => {
  console.log("onSave::", id, " item:", item, " url:", API_NAME, " token:", token);
  //only call the API if there was a change (the API calls are stopped)
  if (isChanged) {
    updateData(API_NAME + "/" + id, item, token);
    // since the onChange should have stopped the call to the API, restart the calls
    viewAPI = setInterval(
      getAPIAndRender,
      CALL_API_DELAY
    );
    isChanged = false;
  }
};

const onChange = id => {
  //in order to let update of table cells, stop call to API
  isChanged = true;
  clearInterval(viewAPI);
  console.log("onChange::", id);
  //deleteAPIAndRender(url+"/"+id,token);
};

function onError(err) {
  console.error("Error when contacting API:", err);
}

function onGet(response) {
  if (response.success) {
    if (response.data.length > 0) {      
      let id;     
      create_dynamic_HTML_table(
        "message_board",
        response.data,
        onDelete,
        onSave,
        onChange,
        true,
        FILM_PROPERTIES
      );
    }
  } else $("#message_board").text(JSON.stringify(response.error));
}

function onPostLogin(response) {
  $("#email1").val("");
  $("#password1").val("");
  if (response.success === "true") {
    // store the jwt in localstorage
    localStorage.setItem("token", response.token);
    token = response.token;
    GlobalRenderWhenAuthenticated(API_NAME, token);
  } else {
    //show error message
    console.error("Error:", response);
    GlobalRenderWhenNotAuthenticated(response.error);
  }
}

function onErrorLogin(err) {
  console.error("Error :", err);
  GlobalRenderWhenNotAuthenticated(response.error);
}
