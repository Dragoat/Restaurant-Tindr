package com.techelevator.model;


public class Invite {

    private int inviteId;
    private int senderId;
    private String date;//I need an appropriate datatype
    private String placeIds;//I need an appropriate datatype

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

    public String getPlaceIds() {
        return placeIds;
    }

    public void setPlaceIds(String placeId) {
        this.placeIds = placeId;
    }

    public Invite() { }

    public Invite( int senderId, String date,String placeIds) {

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
                ", account_from=" +placeIds +
                '}';
    }
}

