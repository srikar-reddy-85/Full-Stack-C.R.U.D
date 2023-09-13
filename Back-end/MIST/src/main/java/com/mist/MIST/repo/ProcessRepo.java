package com.mist.MIST.repo;

import com.mist.MIST.model.process;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ProcessRepo extends JpaRepository<process,Long> {


}
