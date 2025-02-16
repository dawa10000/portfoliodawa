import { eq } from "drizzle-orm";
import { db } from "./db";
import {
  skills,
  experience,
  projects,
  certifications,
  messages,
  blogPosts,
  type Skill,
  type Experience,
  type Project,
  type Certification,
  type Message,
  type BlogPost,
  type InsertSkill,
  type InsertExperience,
  type InsertProject,
  type InsertCertification,
  type InsertMessage,
  type InsertBlogPost,
  type User,
  type InsertUser,
} from "@shared/schema";

export interface IStorage {
  // Skills
  getSkills(): Promise<Skill[]>;
  createSkill(skill: InsertSkill): Promise<Skill>;

  // Experience
  getExperience(): Promise<Experience[]>;
  createExperience(exp: InsertExperience): Promise<Experience>;

  // Projects
  getProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;

  // Certifications
  getCertifications(): Promise<Certification[]>;
  createCertification(cert: InsertCertification): Promise<Certification>;

  // Messages
  createMessage(message: InsertMessage): Promise<Message>;
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Blog methods
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
}

export class DatabaseStorage implements IStorage {
  // Skills
  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills);
  }

  async createSkill(skill: InsertSkill): Promise<Skill> {
    const [newSkill] = await db.insert(skills).values(skill).returning();
    return newSkill;
  }

  // Experience
  async getExperience(): Promise<Experience[]> {
    return await db.select().from(experience);
  }

  async createExperience(exp: InsertExperience): Promise<Experience> {
    const [newExp] = await db.insert(experience).values(exp).returning();
    return newExp;
  }

  // Projects
  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async createProject(project: InsertProject): Promise<Project> {
    const [newProject] = await db.insert(projects).values(project).returning();
    return newProject;
  }

  // Certifications
  async getCertifications(): Promise<Certification[]> {
    return await db.select().from(certifications);
  }

  async createCertification(cert: InsertCertification): Promise<Certification> {
    const [newCert] = await db.insert(certifications).values(cert).returning();
    return newCert;
  }

  // Messages
  async createMessage(message: InsertMessage): Promise<Message> {
    const [newMessage] = await db.insert(messages).values(message).returning();
    return newMessage;
  }

  async getUser(id: number): Promise<User | undefined> {
    throw new Error("Method not implemented.");
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    throw new Error("Method not implemented.");
  }

  async createUser(user: InsertUser): Promise<User> {
    throw new Error("Method not implemented.");
  }

  // Blog methods
  async getBlogPosts(): Promise<BlogPost[]> {
    return await db.select().from(blogPosts).orderBy(blogPosts.publishedAt);
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const [post] = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.slug, slug));
    return post;
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const [newPost] = await db.insert(blogPosts).values(post).returning();
    return newPost;
  }
}

export const storage = new DatabaseStorage();