package com.mist.MIST.controller;
import com.mist.MIST.Exception.productalreadyexistexception;
import com.mist.MIST.model.product;
import com.mist.MIST.service.Iproductservice;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "*")
public class Productcontroller {
    private final Iproductservice productservice;

    public Productcontroller(Iproductservice productservice) {
        this.productservice = productservice;
    }


    @GetMapping
    public ResponseEntity<List<product>> getproduct(){
        return new ResponseEntity<>(productservice.getproduct(), HttpStatus.FOUND);
    }

    @PostMapping("/add")
    public product addproduct(@RequestBody product Product) throws productalreadyexistexception {
        return productservice.addproduct(Product);
    }
    @PutMapping("/update/{product_id}")
    public product updateproduct(@RequestBody product Product, @PathVariable Long product_id){
        return productservice.updateproduct(Product,product_id);
    }
    @DeleteMapping("/delete/{product_id}")
    public void deleteproduct(@PathVariable Long product_id){
        productservice.deleteproduct(product_id);
    }
    @GetMapping("/product/{product_id}")
    public product getproductbyid(@PathVariable Long product_id){
        return productservice.getproduct(product_id);
    }




}
