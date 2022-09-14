package com.techelevator.model;

public class InviteLocation {

    private int inviteId;
    private String placeId;


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



    public InviteLocation() {
    }



    public InviteLocation(int inviteId, String placeId) {
        this.inviteId = inviteId;
        this.placeId = placeId;

    }

    @Override
    public String toString() {
        return "Invite{" +
                "invite_id=" + inviteId +
                ", place_id=" + placeId +
                '}';
    }

}
