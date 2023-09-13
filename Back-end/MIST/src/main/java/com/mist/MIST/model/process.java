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
@Table(name = "process")
public class process {
    @Id
//    @GeneratedValue
    @Column(name = "process_id")
    private long process_id;
    @Column(name = "process_name")
    private String process_name;
    @Column(name = "description")
    private String description;
}
