import { pgTable, text, serial, integer, boolean, timestamp, date } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  iconType: text("icon_type").notNull(), // 'si' for react-icons/si or 'lucide' for lucide-react
  iconName: text("icon_name").notNull(),
});

export const experience = pgTable("experience", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  company: text("company").notNull(),
  startDate: date("start_date").notNull(),
  endDate: date("end_date"),
  description: text("description").notNull(),
  isCurrentRole: boolean("is_current_role").default(false),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  technologies: text("technologies").array().notNull(),
});

export const certifications = pgTable("certifications", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  issuer: text("issuer").notNull(),
  issueDate: date("issue_date").notNull(),
  credentialId: text("credential_id").notNull(),
});

export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content").notNull(),
  excerpt: text("excerpt").notNull(),
  coverImage: text("cover_image"),
  publishedAt: timestamp("published_at").defaultNow(),
  published: boolean("published").default(false),
});

// Create insert schemas
export const insertSkillSchema = createInsertSchema(skills).omit({ id: true });
export const insertExperienceSchema = createInsertSchema(experience).omit({ id: true });
export const insertProjectSchema = createInsertSchema(projects).omit({ id: true });
export const insertCertificationSchema = createInsertSchema(certifications).omit({ id: true });
export const insertMessageSchema = createInsertSchema(messages).omit({ id: true, createdAt: true });
export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({ 
  id: true,
  publishedAt: true 
});

// Export types
export type Skill = typeof skills.$inferSelect;
export type Experience = typeof experience.$inferSelect;
export type Project = typeof projects.$inferSelect;
export type Certification = typeof certifications.$inferSelect;
export type Message = typeof messages.$inferSelect;
export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertSkill = z.infer<typeof insertSkillSchema>;
export type InsertExperience = z.infer<typeof insertExperienceSchema>;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type InsertCertification = z.infer<typeof insertCertificationSchema>;
export type InsertMessage = z.infer<typeof insertMessageSchema>;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;