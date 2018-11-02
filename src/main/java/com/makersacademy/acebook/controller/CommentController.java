package com.makersacademy.acebook.controller;

import com.makersacademy.acebook.model.Comment;
import com.makersacademy.acebook.model.Post;
import com.makersacademy.acebook.repository.CommentRepository;
import com.makersacademy.acebook.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class CommentController {
    @Autowired
    private PostRepository postRepository;

    @Autowired
    private CommentRepository commentRepository;

    @GetMapping("/posts/{post_id}/comments")
    public List<Comment> getPostComments(@PathVariable (value = "post_id") Long post_id) {
        return commentRepository.findByParent(post_id);
    }

//    @PostMapping("/posts/{parent_post_id}/comments")
//    public Comment addComment(@PathVariable (value= "parent_post_id") Long parent_post_id, @Valid @RequestBody Comment comment) {
//        return postRepository.findById(parent_post_id).map(post -> {
//            comment.setParent(post);
//            return commentRepository.save(comment);
//        }).orElseThrow(() -> new ResourceNotFoundException("PostId " + parent_post_id + " not found"));
//    }


    @PostMapping("/posts/{parent_post_id}/comments")
    public void addComment(@PathVariable (value= "parent_post_id") Long parent_post_id, @Valid @RequestBody Comment comment) {
        Post postToEdit = postRepository.findById(parent_post_id).orElse(new Post());
            postToEdit.getCommentList().add(comment);
            postRepository.save(postToEdit);
    }

}
