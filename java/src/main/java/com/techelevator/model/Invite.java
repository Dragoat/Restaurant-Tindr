package com.techelevator.model;


public class Invite {

    private int inviteId;
    private int senderId;
    private String appointment;
    private String locationSearch;
    private String foodSearch;


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

    public String getAppointment() {
        return appointment;
    }

    public void setAppointment(String appointment) {
        this.appointment = appointment;
    }

    public String getLocationSearch() {
        return locationSearch;
    }

    public void setLocationSearch(String locationSearch) {
        this.locationSearch = locationSearch;
    }

    public String getFoodSearch() {
        return foodSearch;
    }

    public void setFoodSearch(String foodSearch) {
        this.foodSearch = foodSearch;
    }

    public Invite() { }

    public Invite( int senderId, String appointment, String locationSearch, String foodSearch) {

        this.senderId = senderId;
        this.appointment = appointment;
        this.locationSearch = locationSearch;
        this.foodSearch = foodSearch;
    }

    @Override
    public String toString() {
        return "Invite{" +
                "invite_id=" + inviteId +
                ", sender_id=" + senderId +
                ", appointment=" + appointment +
                ", locationSearch=" + locationSearch +
                ", foodSearch=" + foodSearch +
                '}';
    }
}

