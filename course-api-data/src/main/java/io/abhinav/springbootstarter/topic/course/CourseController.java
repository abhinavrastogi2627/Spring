package io.abhinav.springbootstarter.topic.course;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.abhinav.springbootstarter.topic.Topic;

@RestController
public class CourseController {
	@Autowired
	private CourseService courseService;
	
	@RequestMapping("/topics/{id}/courses")
	public List<Course> getallcourses(@PathVariable String id) {
		return courseService.getAllcourses(id);
	}
	
	
	@RequestMapping("//topics/{topicid}/courses/{id}")
	public Course getcourse(@PathVariable String id) {
		return courseService.getcourse(id);
	}
	
	
	
	@RequestMapping(method = RequestMethod.POST, value = "/topics/{topicid}/course")
	public void addcourse(@RequestBody Course course , @PathVariable String topicid) {
		course.setTopic(new Topic(topicid, "",""));
		courseService.addcourse(course);
	}
	@RequestMapping(method = RequestMethod.PUT, value = "/topics/{topicid}/course/{id}")
	public void updatecourse(@RequestBody Course course,@PathVariable String topicid, @PathVariable String id) {
		course.setTopic(new Topic(topicid, "",""));
		 courseService.updatecourse(course);
	}
	@RequestMapping(method = RequestMethod.DELETE, value = "/topics/{topicid}/course/{id}")
	public void deletecourse(@PathVariable String id  ) {
		courseService.deletecourse(id);
	}
	

}
