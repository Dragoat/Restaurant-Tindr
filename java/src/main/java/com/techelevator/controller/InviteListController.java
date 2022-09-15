package com.techelevator.controller;

import com.techelevator.dao.InviteListDao;
import com.techelevator.model.Invite;
import com.techelevator.model.InviteList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
    @RestController
    @RequestMapping(value = "/invite_list")
    @PreAuthorize("isAuthenticated()")
    public class InviteListController {


        @Autowired
        private InviteListDao inviteListDao;


        @GetMapping(value = "invite_id/{invite_id}")
        public List<InviteList> getInvitesByInviteId(@PathVariable Integer invite_id) throws Exception {
            List<InviteList> inviteList = null;
            inviteList = inviteListDao.getAllRecipientsByInviteId(invite_id);
            return inviteList;
        }

        @GetMapping(value = "invitee/{recipient_id}")
        public List<InviteList> getInviteById(@PathVariable int recipient_id) throws Exception {
            List<Invite> inviteList = null;
            return inviteListDao.getInviteListByRecipientId(recipient_id);
        }

        @PostMapping(value = "")
        public void createInviteList(@RequestBody InviteList inviteList) {
            inviteListDao.createInviteList(inviteList);
        }

        @DeleteMapping(value = "invite/{invite_id}")
        public void deleteInvite(@PathVariable int invite_id) {
            inviteListDao.deleteInviteListByInviteId(invite_id);
        }


}
