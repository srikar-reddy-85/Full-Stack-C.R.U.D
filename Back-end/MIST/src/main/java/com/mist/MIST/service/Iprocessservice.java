package com.mist.MIST.service;

import com.mist.MIST.Exception.processalreadyexistexception;
import com.mist.MIST.model.process;

import java.util.List;

public interface Iprocessservice {
    process addprocess(process Process) throws processalreadyexistexception;
    List<process> getprocess();
    process updateprocess(process Process,Long process_id);
    process getprocess(Long process_id);
    void deleteprocess(Long process_id);

}
