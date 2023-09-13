package com.mist.MIST.service;
import com.mist.MIST.Exception.processalreadyexistexception;
import com.mist.MIST.Exception.processnotfoundexception;
import com.mist.MIST.model.process;
import com.mist.MIST.repo.ProcessRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
@RequiredArgsConstructor
public class Processservice implements Iprocessservice{
    private final ProcessRepo processrepo;
    @Override
    public process addprocess(process Process) throws processalreadyexistexception {
        if(processalreadyexist(Process.getProcess_id())){
            throw new processalreadyexistexception(Process.getProcess_id()+"process already exist");
        }
        return processrepo.save(Process);
    }


    @Override
    public List<process> getprocess() {
        return processrepo.findAll();
    }

    @Override
    public process updateprocess(process Process, Long process_id) {
        return processrepo.findById(process_id).map(p ->{
            p.setProcess_name(Process.getProcess_name());
            p.setDescription(Process.getDescription());
            return processrepo.save(p);
        }).orElseThrow(()->new processnotfoundexception("process not found"));
    }

    @Override
    public process getprocess(Long process_id) {

        return processrepo.findById(process_id).orElseThrow(()->new processnotfoundexception("process not found "+process_id));
    }

    @Override
    public void deleteprocess(Long process_id) {
        if(!processrepo.existsById(process_id)){
            throw new processnotfoundexception("process not found");
        }
        processrepo.deleteById(process_id);

    }
    private boolean processalreadyexist(long process_id) {
        return processrepo.findById(process_id).isPresent();
    }

}
