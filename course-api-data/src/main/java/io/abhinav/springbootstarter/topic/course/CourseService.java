package io.abhinav.springbootstarter.topic.course;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseService {
	
	@Autowired
	private CourseRepository courseRepository;
	
	
	public List<Course> getAllcourses(String idString){
//		return topics;
		List<Course> course =new ArrayList<>();
		courseRepository.findByTopicId(idString)
		.forEach(course ::add);
		return course;
	}
	
	public Course getcourse(String id) {
		return courseRepository.findById(id).get();
	}
	
	public void addcourse(Course course) {
		courseRepository.save(course);
	}

	public void updatecourse(Course course) {
		courseRepository.save(course);
		
	}
	
	public void deletecourse(String id) {
//		topics.removeIf(t -> t.idString.equals(id));
		courseRepository.deleteById(id);
		
	}
}
