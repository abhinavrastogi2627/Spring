package io.abhinav.springbootstarter.topic;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TopicService {
	
	private List<Topic> topics = new ArrayList<>(Arrays.asList(
			new Topic("java", "java boot", "very best tutorial"),
			new Topic("spring", "Spring boot", "very good tutorial"),
			new Topic("c++", "c++ boot", "very  tutorial"),
			new Topic("python", "python boot", " good tutorial")
			));
	
	public List<Topic> getAllTopics(){
		return topics;
	}
	
	public Topic gettopic(String id) {
		return topics.stream().filter(te -> te.getIdString().equals(id)).findFirst().get();
	}
	
	public void addtopic(Topic topic) {
		topics.add(topic) ;
	}

	public void updatetopic(String id, Topic topic) {
		for(int i=0;i<topics.size();i++) {
			Topic t =topics.get(i);
			if(t.idString.equals(id)) {
				topics.set(i, topic);
				return;
			}
		}
		
	}

	public void deleteTopic(String id) {
		topics.removeIf(t -> t.idString.equals(id));
		
	}
}
