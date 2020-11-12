using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace SportsStore.Models {

    //Permet de récupérer les données de la bd et même de sauvegarder des nouvelles
    public class EFOrderRepository : IOrderRepository {

        private StoreDbContext context;

        public EFOrderRepository(StoreDbContext ctx) {
            context = ctx;
        }

        public IQueryable<Order> Orders => context.Orders
                            .Include(o => o.Lines) // prend les tables associer à l'ORDER
                            .ThenInclude(l => l.Product);

        public void SaveOrder(Order order) {
            context.AttachRange(order.Lines.Select(l => l.Product)); // cela empeche de save le product si il est déjà dans la db
            if (order.OrderID == 0) {
                context.Orders.Add(order);
            }
            context.SaveChanges();
        }
    }
}
