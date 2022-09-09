package com.techelevator.dao;

import com.techelevator.model.Invite;
import com.techelevator.model.InviteList;
import com.techelevator.model.User;

import java.util.List;

public interface InviteListDao {

    List<InviteList> getInviteListByRecipientId(int recipient_id) throws Exception;
    List<InviteList> getAllRecipientsByInviteId(int inviteId) throws Exception;

    void createInviteList(InviteList inviteList);

    void deleteInviteListByInviteId(int invite_id);
}
