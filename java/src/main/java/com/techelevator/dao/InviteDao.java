package com.techelevator.dao;

import com.techelevator.model.Invite;
import com.techelevator.model.User;
import java.sql.PreparedStatement;
import java.util.ArrayList;
import java.util.List;

import java.util.List;

public interface InviteDao {

    void createInvite(Invite invite);

    void updateInvite(Invite invite);

    void deleteInvite(int inviteId);

    Invite getInviteByInviteId(int inviteId) throws Exception;

    List<Invite> findAllSentInvitesByUserId(int userId) throws Exception;
    List<Invite> findAllSentInvitesByUserIdLimitedByDate(int userId, String date);








}
