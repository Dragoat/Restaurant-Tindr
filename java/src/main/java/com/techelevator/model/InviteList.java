package com.techelevator.model;

import java.util.Map;

public class InviteList {
    private int inviteId;
    private int recipientId;
    private String placeReplies;

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

    public String getPlaceReplies() {
        return placeReplies;
    }

    public void setPlaceReplies(String placeReplies) {
        this.placeReplies = placeReplies;
    }

    public InviteList(int inviteId, int inviteeId, String placeReplies){
        this.inviteId = inviteId;
        this.recipientId = inviteeId;
        this.placeReplies = placeReplies;
    }

    @Override
    public String toString() {
        return "InviteList{" +
                "invite_id=" + inviteId +
                ", invitee_id=" + recipientId +
                ", place_replies=" + placeReplies +
                '}';
    }

}
