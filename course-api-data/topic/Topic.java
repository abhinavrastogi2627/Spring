package io.abhinav.springbootstarter.topic;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Topic {

	@Id
	String idString;
	String nameString;
	String desc;
	public Topic() {
	}
	
	public Topic(String idString, String nameString, String desc) {
		super();
		this.idString = idString;
		this.nameString = nameString;
		this.desc = desc;
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
	
	
}
