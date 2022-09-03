package com.techelevator.model;

public class InviteList {
    private int inviteId;
    private int inviteeId;

    public int getInviteId() {
        return inviteId;
    }

    public void setInviteId(int inviteId) {
        this.inviteId = inviteId;
    }

    public int getInviteeId() {
        return inviteeId;
    }

    public void setInviteeId(int inviteeId) {
        this.inviteeId = inviteeId;
    }

    public InviteList() { }

    public InviteList(int inviteId, int inviteeId) {

        //need to look at that thing that generates id in a serialized way

        this.inviteId = inviteId;
        this.inviteeId = inviteeId;
    }

    @Override
    public String toString() {
        return "Invite{" +
                "transfer_id=" + inviteId +
                ", transfer_type_id=" + inviteeId +
                '}';
    }

}
