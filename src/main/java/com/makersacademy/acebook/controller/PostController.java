package com.makersacademy.acebook.controller;

import com.makersacademy.acebook.model.Post;
import com.makersacademy.acebook.repository.PostRepository;
import com.makersacademy.acebook.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/acebook" )
public class PostController {
    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping(path="/posts")
    public @ResponseBody
    Iterable<Post> getAllPosts() {
        // This returns a JSON or XML with the posts
        return postRepository.findAll();
    }

    @PostMapping("/posts")
    public Post createPost(@Valid @RequestBody Post post) {
        return postRepository.save(post);
    }
//    @PostMapping("/api/users/{userId}/posts")
//    public Post addPost(@PathVariable Long userId, @Valid @RequestBody Post post){
//        post.setUser(userRepository.findById(userId).get());
//        return postRepository.save(post);
//    }
}
