package com.techelevator.dao;

import com.techelevator.model.Invite;
import com.techelevator.model.User;

import java.util.List;

public interface InviteDao {

    void create(Invite invite);

    void update(Invite Invite);

    void delete(int inviteId);

    Invite getInviteById(int inviteId);

    List<Invite> findAllSentInvitesByUserId(int userId);
    List<Invite> findAllSentInvitesByUserIdLimitedByDate(int userId, String date);








}
