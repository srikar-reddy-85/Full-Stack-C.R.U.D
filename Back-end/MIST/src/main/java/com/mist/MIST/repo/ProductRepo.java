package com.mist.MIST.repo;
import com.mist.MIST.model.product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
@RepositoryRestResource
public interface ProductRepo extends JpaRepository<product,Long> {
}
