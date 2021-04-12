
import java.util.ArrayList;
import java.util.List;

public class Player {
	public enum State {
		LOCKED, PLAYING {
			@Override
			public String onPlay(Player player) {
				player.changeMode(PLAYING);
				return player.startPlayback();
			}
			
			@Override
			public String onLock(Player player) {
				super.onLock(player);
				player.setCurrentTrackAfterStop();
				return "Stop playing";
			}
			
			@Override
			public String onNext(Player player) {
				return player.previousTrack();
			}
			
			@Override
			public String onPrevious(Player player) {
				return player.onPrevious();
			}
		}, READY;
		
		public String onPlay(Player player) {
			player.changeMode(State.READY);
			return State.READY.toString();
		}
		
		public String onLock(Player player) {
			player.changeMode(LOCKED);
			return LOCKED.toString()+"...";
		}
		
		public String onNext(Player player) {
			return "Locked...";
		}
		
		public String onPrevious(Player player) {
			return "Locked...";
		}
	}
	
    private State mode;
    private List<String> playlist = new ArrayList<>();
    private int currentTrack = 0;

    public Player() {
        this.mode = State.READY;
        for (int i = 1; i <= 12; i++) {
            playlist.add("Track " + i);
        }
    }

    public void changeMode(State mode) {
        this.mode = mode;
    }

    public State getMode() {
        return mode;
    }

    public String startPlayback() {
        return "Playing " + playlist.get(currentTrack);
    }

    public String nextTrack() {
        currentTrack++;
        if (currentTrack > playlist.size() - 1) {
            currentTrack = 0;
        }
        return "Playing " + playlist.get(currentTrack);
    }

    public String previousTrack() {
        currentTrack--;
        if (currentTrack < 0) {
            currentTrack = playlist.size() - 1;
        }
        return "Playing " + playlist.get(currentTrack);
    }

    public void setCurrentTrackAfterStop() {
        this.currentTrack = 0;
    }

	public String onPlay() {
		return mode.onPlay(this);
	}

	public String onLock() {
		return mode.onLock(this);
	}

	public String onNext() {
		return mode.onNext(this);
	}

	public String onPrevious() {
		return mode.onNext(this);
	}
}
