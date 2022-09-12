package com.techelevator.model;

public class InviteList {
    private int inviteId;
    private int recipientId;


    public int getInviteId() {
        return inviteId;
    }

    public void setInviteId(int inviteId) {
        this.inviteId = inviteId;
    }

    public int getRecipientId() {
        return recipientId;
    }

    public void setRecipientId(int inviteeId) {
        this.recipientId = inviteeId;
    }

    public InviteList() { }


    public InviteList(int inviteId, int inviteeId){
        this.inviteId = inviteId;
        this.recipientId = inviteeId;
    }

    @Override
    public String toString() {
        return "InviteList{" +
                "invite_id=" + inviteId +
                ", recipient_id=" + recipientId +
                '}';
    }

}
