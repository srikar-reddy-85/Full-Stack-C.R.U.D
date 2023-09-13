package com.mist.MIST.service;
import com.mist.MIST.Exception.productalreadyexistexception;
import com.mist.MIST.Exception.productnotfoundexception;
import com.mist.MIST.model.product;
import com.mist.MIST.repo.ProductRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
@RequiredArgsConstructor
public class Productservice implements Iproductservice{

    private final ProductRepo productrepo;
    @Override
    public product addproduct(product Product) throws productalreadyexistexception {
        if(productalreadyexist(Product.getProduct_id())){
            throw new productalreadyexistexception(Product.getProduct_id()+"product already exist");
        }
        return productrepo.save(Product);
    }

    @Override
    public List<product> getproduct() {
        return productrepo.findAll();
    }

    @Override
    public product updateproduct(product Product, Long product_id) {
        return productrepo.findById(product_id).map(p ->{
            p.setProduct_name(Product.getProduct_name());
            p.setDescription(Product.getDescription());
            return productrepo.save(p);
        }).orElseThrow(()->new productnotfoundexception("product not found"));
    }

    @Override
    public product getproduct(Long product_id) {

        return productrepo.findById(product_id).orElseThrow(()->new productnotfoundexception("product not found "+product_id));

    }

    @Override
    public void deleteproduct(Long product_id) {

        if(!productrepo.existsById(product_id)){
            throw new productnotfoundexception("product not found");
        }
        productrepo.deleteById(product_id);

    }

    private boolean productalreadyexist(long product_id) {
        return productrepo.findById(product_id).isPresent();
    }
}
