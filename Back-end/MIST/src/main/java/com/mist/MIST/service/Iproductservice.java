package com.mist.MIST.service;
import com.mist.MIST.Exception.processalreadyexistexception;
import com.mist.MIST.Exception.productalreadyexistexception;
import com.mist.MIST.model.product;
import java.util.List;
public interface Iproductservice {
    product addproduct(product Product) throws productalreadyexistexception;
    List<product> getproduct();
    product updateproduct(product Product,Long product_id);
    product getproduct(Long product_id);
    void deleteproduct(Long product_id);
}
