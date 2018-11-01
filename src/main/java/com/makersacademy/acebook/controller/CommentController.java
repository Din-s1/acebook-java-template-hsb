package com.makersacademy.acebook.controller;


import com.makersacademy.acebook.model.Comment;
import com.makersacademy.acebook.repository.CommentRepository;
import com.makersacademy.acebook.repository.PostRepository;
import com.makersacademy.acebook.repository.UserRepository;
import javafx.scene.canvas.GraphicsContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/acebook")
public class CommentController {
    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CommentRepository commentRepository;

//    @GetMapping("/posts/{post_id}/comments")
//    public List<Comment> getPostComments(@PathVariable Long post_id){
//        return commentRepository.findByParentPostId(post_id);
//    }
//
//
    @PostMapping("/posts/{parent_post_id}/comments")
    public Comment addComment(@PathVariable (value= "parent_post_id") Long parent_post_id, @Valid @RequestBody Comment comment){
        return postRepository.findById(parent_post_id).map(post -> {
            comment.setParent(post);
            return commentRepository.save(comment);
        }).orElseThrow(() -> new ResourceNotFoundException("PostId " + parent_post_id + " not found"));

////        comment.setParent(postRepository.findById(parent_post_id).get());
////        return commentRepository.save(comment);
    }

}
