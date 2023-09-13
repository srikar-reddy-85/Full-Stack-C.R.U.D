package com.mist.MIST.controller;


import com.mist.MIST.Exception.processalreadyexistexception;
import com.mist.MIST.model.process;
import com.mist.MIST.service.Iprocessservice;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/process")
@CrossOrigin(origins = "*")
public class Processcontroller {

    private final Iprocessservice processservice;

    public Processcontroller(Iprocessservice processservice) {
        this.processservice = processservice;
    }


    @GetMapping
    public ResponseEntity<List<process>> getprocess(){
        return new ResponseEntity<>(processservice.getprocess(), HttpStatus.FOUND);
    }

    @PostMapping("/add")
    public process addprocess(@RequestBody process Process) throws processalreadyexistexception {
        return processservice.addprocess(Process);
    }
    @PutMapping("/update/{process_id}")
    public process updateprocess(@RequestBody process Process, @PathVariable Long process_id){
        return processservice.updateprocess(Process,process_id);
    }
    @DeleteMapping("/delete/{process_id}")
    public void deleteprocess(@PathVariable Long process_id){
        processservice.deleteprocess(process_id);
    }
    @GetMapping("/process/{process_id}")
    public process getprocessbyid(@PathVariable Long process_id){
        return processservice.getprocess(process_id);
    }




}
