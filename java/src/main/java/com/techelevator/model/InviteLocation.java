package com.techelevator.model;

public class InviteLocation {

    private int inviteId;
    private String placeId;
    private int noVote;
    private int yesVote;

    public int getInviteId() {
        return inviteId;
    }

    public void setInviteId(int inviteId) {
        this.inviteId = inviteId;
    }

    public String getPlaceId() {
        return placeId;
    }

    public void setPlaceId(String placeId) {
        this.placeId = placeId;
    }

    public int getNoVote() {
        return noVote;
    }

    public void setNoVote(int noVote) {
        this.noVote = noVote;
    }

    public int getYesVote() {
        return yesVote;
    }

    public void setYesVote(int yesVote) {
        this.yesVote = yesVote;
    }

    public InviteLocation() {
    }

    public InviteLocation(int inviteId, String placeId) {
        this.inviteId = inviteId;
        this.placeId = placeId;
        this.noVote = 0;
        this.yesVote = 0;
    }

    public InviteLocation(int inviteId, String placeId, int noVote, int yesVote) {
        this.inviteId = inviteId;
        this.placeId = placeId;
        this.noVote = noVote;
        this.yesVote = yesVote;
    }

    @Override
    public String toString() {
        return "Invite{" +
                "invite_id=" + inviteId +
                ", place_id=" + placeId +
                ", no_vote=" + noVote +
                ", yes_vote=" + yesVote +
                '}';
    }

}
