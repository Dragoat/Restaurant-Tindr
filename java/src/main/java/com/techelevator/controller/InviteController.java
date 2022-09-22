package com.techelevator.controller;




import com.techelevator.dao.InviteDao;
import com.techelevator.model.Invite;
import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/invites")
 @PreAuthorize("isAuthenticated()")
public class InviteController {


    @Autowired
    private InviteDao inviteDao;


    @GetMapping(value = "/sender/{sender_id}")
    public List<Invite> getInvitesBySenderId(@PathVariable Integer sender_id) throws Exception {
        List<Invite> invites = null;
        invites = inviteDao.findAllSentInvitesByUserId(sender_id);
        return invites;
    }

    @PostMapping(value = "")
    public int createInvite(@RequestBody Invite invite) {
        int invite_id=inviteDao.createInvite(invite);
        return invite_id;
    }

    @PutMapping(value = "")
    public void updateInviteDate(@RequestBody Invite invite) {
        inviteDao.updateInvite(invite);
    }

    @DeleteMapping(value = "/{invite_id}")
    public void deleteInvite(@PathVariable int invite_id) {
        inviteDao.deleteInvite(invite_id);
    }

    @GetMapping(value = "/{inviteId}")
    public Invite getInviteById(@PathVariable Integer inviteId) throws Exception {
       return inviteDao.getInviteByInviteId(inviteId);
    }







}
