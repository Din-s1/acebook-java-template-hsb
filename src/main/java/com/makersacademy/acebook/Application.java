package com.makersacademy.acebook;

import com.makersacademy.acebook.model.Post;
import com.makersacademy.acebook.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;




@EnableOAuth2Sso
@RestController
@SpringBootApplication
@EnableJpaAuditing
@Controller
@RequestMapping("/api")
public class Application {

    @Autowired
    PostRepository postRepository;

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }


    @GetMapping("/api")
    public String echoTheUsersEmailAddress(Principal principal) {
        return "Hey there! Your email address is: " + principal.getName();

    }

    @PostMapping(path = "/api/posting")
    public Post createPost(@Valid @RequestBody Post post) {
        return postRepository.save(post);
    }

}
