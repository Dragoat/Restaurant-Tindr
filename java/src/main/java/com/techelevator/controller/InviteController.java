package com.techelevator.controller;




import com.techelevator.dao.InviteDao;
import com.techelevator.model.Invite;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/invites")
@PreAuthorize("isAuthenticated()")
public class InviteController {


    @Autowired
    private InviteDao inviteDao;


    @GetMapping(value = "/{sender_id}")
    public List<Invite> getInvitesBySenderId(@PathVariable int sender_id) throws Exception{
        List<Invite> invites = null;
        invites = inviteDao.findAllSentInvitesByUserId(sender_id);
        return invites;
    }

    @PostMapping(value = "")
    public void createInvite(@RequestBody Invite invite) {
        inviteDao.createInvite(invite);
    }

    @PutMapping(value = "{invite_id}")
    public void updateInvite(@RequestBody Invite invite) {
        inviteDao.updateInvite(invite);
    }

    @DeleteMapping(value = "{invite_id}")
    public void deleteInvite(@RequestBody Invite invite) {
        inviteDao.updateInvite(invite);
    }

    @Override
    public Invite getInviteById(int inviteId) {
        return null;
    }

    @Override
    public List<Invite> findAllSentInvitesByUserId(int userId) {
        return null;
    }

    @Override
    public List<Invite> findAllSentInvitesByUserIdLimitedByDate(int userId, String date) {
        return null;
    }



}
