package io.abhinav.springbootstarter.topic;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TopicService {
	
	@Autowired
	private TopicRepository topicRepository;
	
	
	public List<Topic> getAllTopics(){
//		return topics;
		List<Topic> topics =new ArrayList<>();
		topicRepository.findAll().forEach(topics ::add);
		return topics;
	}
	
	public Topic gettopic(String id) {
		return topicRepository.findById(id).get();
	}
	
	public void addtopic(Topic topic) {
		topicRepository.save(topic);
	}

	public void updatetopic(String id, Topic topic) {
		topicRepository.save(topic);
		
	}

	public void deleteTopic(String id) {
//		topics.removeIf(t -> t.idString.equals(id));
		topicRepository.deleteById(id);
		
	}
}
