import PatentContent from './PatentContent';
import { notFound } from 'next/navigation';

// Define the patent data type
type Patent = {
  id: string;
  icon: string; // Changed from 'any' to 'string' to match the icon mapping
  title: string;
  description: string;
  extendedDescription: string;
  features: string[];
};

// This function tells Next.js which paths to pre-render at build time
export async function generateStaticParams() {
  return [
    { id: 'personalized-education' },
    { id: 'interactive-voice' },
    { id: 'multiple-passwords' },
    { id: 'doubt-clarification' },
    { id: 'adaptive-learning' },
    { id: 'content-recommendation' },
    { id: 'multi-language' },
    { id: 'performance-analytics' },
    { id: 'cognitive-load' },
  ];
}

// Get patent data by ID
function getPatentById(id: string): Patent | undefined {
  const patents: Patent[] = [
    {
      id: "personalized-education",
      icon: "brain",
      title: "World's first 10,000+ Concepts Based Personalized Education",
      description: "A revolutionary approach to personalized learning that adapts to individual student needs.",
      extendedDescription: "Our personalized education system leverages a vast database of over 10,000 educational concepts, creating a truly adaptive learning experience. The system uses sophisticated algorithms to map each student's knowledge gaps and learning preferences, then dynamically generates a customized curriculum path. This approach ensures that students focus on areas where they need the most support while advancing quickly through concepts they've already mastered.",
      features: [
        "Comprehensive concept mapping across subjects",
        "Real-time adaptation based on performance",
        "Personalized difficulty progression",
        "Custom learning path generation",
        "Spaced repetition for optimal retention"
      ]
    },
    {
      id: "interactive-voice",
      icon: "mic",
      title: "World's first 2-Way Interactive Voice Based Education Platform",
      description: "Engaging voice-enabled learning experience that responds to student interactions.",
      extendedDescription: "Our interactive voice-based education platform transforms the traditional learning experience by enabling natural, conversational interactions between students and educational content. Using advanced speech recognition and natural language processing, the system can understand student queries, provide contextual responses, and adapt its teaching approach based on verbal cues. This technology is particularly beneficial for auditory learners and creates a more engaging, accessible learning environment.",
      features: [
        "Natural language processing for student queries",
        "Voice-activated learning modules",
        "Accent and dialect recognition capabilities",
        "Conversational feedback mechanisms",
        "Hands-free learning experience"
      ]
    },
    {
      id: "multiple-passwords",
      icon: "shield",
      title: "Single User Multiple Passwords Mechanism",
      description: "Enhanced security protocol for educational platforms with multiple access levels.",
      extendedDescription: "Our Single User Multiple Passwords Mechanism revolutionizes digital security in educational environments by allowing one user to maintain multiple password-protected access levels. This innovative approach enables institutions to grant varying degrees of access to different educational resources while maintaining robust security protocols. The system also facilitates parental controls, administrative oversight, and specialized content access without compromising user convenience or system integrity.",
      features: [
        "Role-based access control",
        "Tiered security clearance levels",
        "Simplified credential management",
        "Parental control integration",
        "Secure password recovery protocols"
      ]
    },
    {
      id: "doubt-clarification",
      icon: "zap",
      title: "AI-Powered Doubt Clarification System",
      description: "Intelligent system that provides instant clarification for student queries.",
      extendedDescription: "Our AI-Powered Doubt Clarification System represents a breakthrough in educational support technology. Using advanced machine learning algorithms, the system can understand, analyze, and respond to student questions with remarkable accuracy and contextual awareness. Unlike simple Q&A systems, our technology recognizes the conceptual foundations of student queries, providing explanations that address not just the immediate question but also the underlying knowledge gaps that may have prompted it.",
      features: [
        "Natural language understanding of complex questions",
        "Contextual awareness of student's learning history",
        "Multi-modal explanations (text, visual, interactive)",
        "Adaptive response complexity based on student level",
        "Integration with curriculum progression tracking"
      ]
    },
    {
      id: "adaptive-learning",
      icon: "code",
      title: "Adaptive Learning Algorithm",
      description: "Machine learning algorithm that continuously adapts to student learning patterns.",
      extendedDescription: "Our Adaptive Learning Algorithm represents the cutting edge of educational technology, continuously evolving its approach based on individual student interaction patterns. The system analyzes numerous data points—from response times and error patterns to engagement metrics and learning preferences—to create a truly personalized educational experience. As students progress, the algorithm refines its understanding of their unique learning style, optimizing content delivery, difficulty progression, and reinforcement strategies.",
      features: [
        "Dynamic difficulty adjustment",
        "Learning style identification",
        "Predictive performance modeling",
        "Engagement optimization",
        "Continuous improvement through usage data"
      ]
    },
    {
      id: "content-recommendation",
      icon: "database",
      title: "Smart Content Recommendation Engine",
      description: "AI-driven engine that recommends personalized learning content.",
      extendedDescription: "Our Smart Content Recommendation Engine transforms educational resource discovery by intelligently matching students with the most relevant learning materials. Leveraging sophisticated machine learning algorithms, the system analyzes a student's learning history, preferences, strengths, and areas for improvement to suggest optimally beneficial content. Unlike traditional recommendation systems, our engine considers pedagogical principles, learning objectives, and curriculum alignment to ensure recommendations advance educational goals rather than simply reflecting past choices.",
      features: [
        "Cross-disciplinary content connections",
        "Interest-based supplementary materials",
        "Skill gap identification and targeted resources",
        "Diverse format recommendations (video, text, interactive)",
        "Peer learning resource suggestions"
      ]
    },
    {
      id: "multi-language",
      icon: "globe",
      title: "Multi-Language Learning Platform",
      description: "Platform supporting seamless learning across multiple languages.",
      extendedDescription: "Our Multi-Language Learning Platform breaks down linguistic barriers in education by providing seamless access to quality learning materials across numerous languages. Beyond simple translation, the system preserves cultural context, technical accuracy, and pedagogical effectiveness across language transitions. This technology enables truly global educational access, allowing students to learn in their native language while institutions can efficiently create and manage content for diverse linguistic audiences.",
      features: [
        "Real-time content translation",
        "Cultural context preservation",
        "Technical terminology accuracy",
        "Language-specific learning adaptations",
        "Cross-language progress tracking"
      ]
    },
    {
      id: "performance-analytics",
      icon: "cpu",
      title: "Real-time Performance Analytics",
      description: "Advanced analytics system for tracking and improving student performance.",
      extendedDescription: "Our Real-time Performance Analytics system transforms educational assessment through comprehensive, instantaneous analysis of student performance data. Moving beyond traditional grading, the platform provides multidimensional insights into learning patterns, concept mastery, engagement levels, and progress trajectories. Educators gain access to actionable intelligence that enables timely interventions, while students benefit from transparent feedback that clarifies their strengths and areas for improvement.",
      features: [
        "Comprehensive performance dashboards",
        "Trend analysis across time periods",
        "Concept mastery visualization",
        "Comparative cohort analysis",
        "Predictive performance modeling"
      ]
    },
    {
      id: "cognitive-load",
      icon: "brain",
      title: "Cognitive Load Optimization",
      description: "Technology that optimizes learning by managing cognitive load effectively.",
      extendedDescription: "Our Cognitive Load Optimization technology represents a breakthrough in educational efficiency by dynamically managing the mental workload experienced by students during learning. Based on cognitive science principles, the system monitors indicators of cognitive load and adjusts content presentation, pacing, and complexity to maintain optimal challenge levels. This prevents both cognitive overload (which causes frustration and disengagement) and underload (which leads to boredom and reduced retention), ensuring students remain in the ideal learning state.",
      features: [
        "Real-time cognitive load assessment",
        "Dynamic content complexity adjustment",
        "Optimal challenge level maintenance",
        "Attention fatigue detection and mitigation",
        "Personalized information chunking strategies"
      ]
    }
  ];

  return patents.find(patent => patent.id === id);
}

// This is the main server component that renders the patent page
export default function PatentPage({ params }: { params: { id: string } }) {
  const patent = getPatentById(params.id);
  
  if (!patent) {
    notFound();
  }

  return <PatentContent patent={patent} />;
}
