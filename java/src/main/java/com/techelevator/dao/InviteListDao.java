package com.techelevator.dao;

import com.techelevator.model.Invite;
import com.techelevator.model.InviteList;
import com.techelevator.model.User;

import java.util.List;

public interface InviteListDao {

    List<InviteList> getInviteListByRecipeintId(int recipient_id);
    List<InviteList> getAllRecipientsByInviteId(int inviteId);

    void createInviteList(int invite_id, int recipient_id);

    void deleteInviteListByInviteId(int invite_id);
}
