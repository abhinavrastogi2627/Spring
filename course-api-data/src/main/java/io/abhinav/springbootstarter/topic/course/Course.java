package io.abhinav.springbootstarter.topic.course;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import io.abhinav.springbootstarter.topic.Topic;

@Entity
public class Course {

	@Id
	String idString;
	String nameString;
	String desc;
	
	// how do we let spring data jpa know that this is the foreign key for the topic ?
	@ManyToOne
	private Topic topic;


	public Course() {
	}
	
	public Course(String idString, String nameString, String desc, String topicid) {
		super();
		this.idString = idString;
		this.nameString = nameString;
		this.desc = desc;
		this.topic = new Topic(topicid, "" , "");
	}
	public String getIdString() {
		return idString;
	}
	public void setIdString(String idString) {
		this.idString = idString;
	}
	public String getNameString() {
		return nameString;
	}
	public void setNameString(String nameString) {
		this.nameString = nameString;
	}
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	
	
	public Topic getTopic() {
		return topic;
	}

	public void setTopic(Topic topic) {
		this.topic = topic;
	}
	
	
}
