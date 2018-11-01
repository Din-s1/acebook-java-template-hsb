package com.makersacademy.acebook.repository;

import com.makersacademy.acebook.model.Comment;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByParent(Long parent_post_id);

//    @Query(value = "SELECT posts.post_id FROM posts where post_id = :id")
//    Optional<Comment> findById(@Param("id") Long id);
}
