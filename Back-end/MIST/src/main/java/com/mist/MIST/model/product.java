package com.mist.MIST.model;

import jakarta.persistence.*;
import lombok.*;
import org.antlr.v4.runtime.misc.NotNull;

@Data
@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "product")
public class product {
    @Id
//    @GeneratedValue
    @Column(name = "product_id")
    private long product_id;
    @Column(name = "product_name")
    private String product_name;
    @Column(name = "p_uom")
    private String description;
}
