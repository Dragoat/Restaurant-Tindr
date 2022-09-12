package com.techelevator.model;


public class Invite {

    private int inviteId;
    private int senderId;
    private String appointment;


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


    public Invite() { }

    public Invite( int senderId, String appointment) {

        this.senderId = senderId;
        this.appointment = appointment;
    }

    @Override
    public String toString() {
        return "Invite{" +
                "invite_id=" + inviteId +
                ", sender_id=" + senderId +
                ", transfer_status_id=" + appointment +
                '}';
    }
}

