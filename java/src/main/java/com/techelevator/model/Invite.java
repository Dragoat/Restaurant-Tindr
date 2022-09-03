package com.techelevator.model;

public class Invite {
    private int inviteId;
    private int senderId;
    private String date;//I need an appropriate datatype
    private int[] placeIds;

    public int getInviteId() {
        return inviteId;
    }

    public void setInviteId(int inviteId) {
        this.inviteId = inviteId;
    }

    public int getSenderId() {
        return senderId;
    }

    public void setSenderId(int senderId) {
        this.senderId = senderId;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int[] getPlaceIds() {
        return placeIds;
    }

    public void setPlaceIds(int[] placeId) {
        this.placeIds = placeId;
    }

    public Invite() { }

    public Invite(int inviteId, int senderId, String date,int[] placeIds) {

        //need to look at that thing that generates id in a serialized way

        this.inviteId = inviteId;
        this.senderId = senderId;
        this.date = date;
        this. placeIds = placeIds;
    }

    @Override
    public String toString() {
        return "Invite{" +
                "transfer_id=" + inviteId +
                ", transfer_type_id=" + senderId +
                ", transfer_status_id=" + date +
                ", account_from=" + placeIds +
                '}';
    }
}

