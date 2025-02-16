import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
  Paper,
  Collapse,
  IconButton,
  Checkbox,
  FormGroup,
  useTheme
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { motion } from 'framer-motion';
import BugReport from './BugReport';
import RatingSubmit from './RatingSubmit';
import InstructionBox from './InstructionBox';
import IframeContainer from './IframeContainer';
import MarkdownViewer from './MarkdownViewer';
import Sidebar from './Sidebar';

const myQuestions = [
  {
    question: "What is the primary purpose of Virtual Labs?",
    answers: {
      a: "Entertainment and gaming",
      b: "Remote experimentation and learning",
      c: "Social networking",
      d: "File storage"
    },
    correctAnswer: "b",
    difficulty: "beginner",
    explanations: {
      a: "Virtual Labs are educational tools, not entertainment platforms.",
      b: "Correct! Virtual Labs enable remote experimentation and learning through simulation.",
      c: "While collaboration exists, the main purpose is education.",
      d: "Virtual Labs are for experimentation, not file storage."
    }
  },
  {
    question: "Which of these is NOT a key benefit of Virtual Labs?",
    answers: {
      a: "24/7 accessibility",
      b: "Cost reduction",
      c: "Physical equipment handling experience",
      d: "Remote access"
    },
    correctAnswer: "c",
    difficulty: "beginner",
    explanations: {
      a: "24/7 accessibility is a major benefit of Virtual Labs.",
      b: "Cost reduction is indeed a significant advantage.",
      c: "Correct! Physical equipment handling is limited in Virtual Labs - this is one trade-off.",
      d: "Remote access is a key feature of Virtual Labs."
    }
  },
  {
    question: "What technology framework is most commonly used in Virtual Labs?",
    answers: {
      a: "Virtual Reality (VR)",
      b: "Web-based interfaces",
      c: "Blockchain",
      d: "Internet of Things (IoT)"
    },
    correctAnswer: "b",
    difficulty: "intermediate",
    explanations: {
      a: "While VR can be used, it's not the most common framework.",
      b: "Correct! Web-based interfaces are most commonly used for accessibility.",
      c: "Blockchain is not typically used in Virtual Labs.",
      d: "IoT may be integrated but isn't the primary framework."
    }
  },
  {
    question: "What is the role of data analytics in Virtual Labs?",
    answers: {
      a: "Student performance tracking",
      b: "Experiment optimization",
      c: "Resource allocation",
      d: "All of the above"
    },
    correctAnswer: "d",
    difficulty: "advanced",
    explanations: {
      a: "This is one aspect, but not the only one.",
      b: "This is important, but there's more to it.",
      c: "Resource allocation is one function, but not all.",
      d: "Correct! Data analytics serves multiple purposes including tracking, optimization, and resource management."
    }
  },
  {
    question: "Which security feature is most critical for Virtual Labs?",
    answers: {
      a: "User authentication",
      b: "Data encryption",
      c: "Access control",
      d: "All of the above"
    },
    correctAnswer: "d",
    difficulty: "advanced",
    explanations: {
      a: "While important, it's not the only critical feature.",
      b: "Encryption is crucial but not the only requirement.",
      c: "Access control is vital but not sufficient alone.",
      d: "Correct! All these security features are critical for Virtual Labs."
    }
  },
  {
    question: "What is the most effective way to implement collaborative learning in Virtual Labs?",
    answers: {
      a: "Real-time interaction features",
      b: "Shared workspaces",
      c: "Group assignments",
      d: "Chat functionality"
    },
    correctAnswer: "a",
    difficulty: "intermediate",
    explanations: {
      a: "Correct! Real-time interaction is crucial for effective collaboration.",
      b: "Shared workspaces are helpful but not the most effective.",
      c: "Group assignments are useful but not the primary method.",
      d: "Chat is supportive but not the most effective approach."
    }
  },
  {
    question: "How do Virtual Labs support adaptive learning?",
    answers: {
      a: "Personalized feedback",
      b: "Difficulty adjustment",
      c: "Progress tracking",
      d: "All of the above"
    },
    correctAnswer: "d",
    difficulty: "advanced",
    explanations: {
      a: "This is one aspect of adaptive learning.",
      b: "Difficulty adjustment is important but not the only feature.",
      c: "Progress tracking is crucial but not complete.",
      d: "Correct! Virtual Labs use all these features to support adaptive learning."
    }
  },
  {
    question: "What is the main challenge in Virtual Lab implementation?",
    answers: {
      a: "Technical infrastructure",
      b: "Content development",
      c: "User adoption",
      d: "Cost management"
    },
    correctAnswer: "b",
    difficulty: "intermediate",
    explanations: {
      a: "Infrastructure is challenging but not the main obstacle.",
      b: "Correct! Creating high-quality, accurate content is the biggest challenge.",
      c: "Adoption can be difficult but isn't the primary challenge.",
      d: "Cost is a factor but not the main challenge."
    }
  },
  {
    question: "Which feature best supports self-paced learning in Virtual Labs?",
    answers: {
      a: "Recorded demonstrations",
      b: "Interactive simulations",
      c: "Progress tracking",
      d: "Downloadable resources"
    },
    correctAnswer: "b",
    difficulty: "beginner",
    explanations: {
      a: "Recordings are helpful but not the best for self-paced learning.",
      b: "Correct! Interactive simulations allow students to learn at their own pace.",
      c: "Tracking is important but not the primary feature for self-pacing.",
      d: "Resources are supplementary but not the key feature."
    }
  },
  {
    question: "What is the most important factor in ensuring Virtual Lab quality?",
    answers: {
      a: "Regular updates",
      b: "User feedback integration",
      c: "Technical maintenance",
      d: "Performance monitoring"
    },
    correctAnswer: "b",
    difficulty: "advanced",
    explanations: {
      a: "Updates are important but not the most crucial factor.",
      b: "Correct! User feedback is vital for continuous improvement and quality.",
      c: "Maintenance is necessary but not the primary factor.",
      d: "Monitoring helps but isn't the most important factor."
    }
  }
];

const LabAssessment = () => {
  const theme = useTheme();
  const [score, setScore] = useState(null);
  const [answers, setAnswers] = useState({});
  const [difficulties, setDifficulties] = useState(['beginner', 'intermediate', 'advanced']);
  const [showExplanations, setShowExplanations] = useState({});
  const [instructionsOpen, setInstructionsOpen] = useState(true);

  const handleAnswerChange = (questionIndex, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: value
    }));
  };

  const handleDifficultyChange = (difficulty) => {
    setDifficulties(prev => {
      if (prev.includes(difficulty)) {
        return prev.filter(d => d !== difficulty);
      }
      return [...prev, difficulty];
    });
  };

  const handleSubmit = () => {
    let correct = 0;
    let total = 0;

    myQuestions.forEach((question, index) => {
      if (difficulties.includes(question.difficulty)) {
        total++;
        if (answers[index] === question.correctAnswer) {
          correct++;
        }
      }
    });

    setScore({ correct, total });
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Main Content */}
      <Box sx={{ 
        flexGrow: 1, 
        minHeight: '100vh', 
        bgcolor: '#1a1a1a',
        pt: 8,
        pb: 4,
        width: '100%' // Added to ensure full width
      }}>
        <Container 
          maxWidth="lg"
          sx={{ 
            pr: { xs: 2, lg: '280px' }, // Adjust right padding for sidebar
            pl: { xs: 2 },
            boxSizing: 'border-box',
            width: '100%'
          }}
        >
          {/* Instructions Box with slide down functionality */}
          <Box sx={{ 
            mb: 4,
            backgroundColor: 'rgba(30, 30, 30, 0.95)',
            borderRadius: 2,
            border: '1px solid rgba(255, 255, 255, 0.1)',
            overflow: 'hidden'
          }}>
            <Box 
              onClick={() => setInstructionsOpen(!instructionsOpen)}
              sx={{
                p: 3,
                borderBottom: instructionsOpen ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.4)'
                }
              }}
            >
              <Typography variant="h5" sx={{ color: 'white' }}>
                Lab Instructions
              </Typography>
              <KeyboardArrowDownIcon 
                sx={{ 
                  color: 'white',
                  transform: instructionsOpen ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.3s'
                }} 
              />
            </Box>
            
            <Collapse in={instructionsOpen}>
              <Box sx={{ p: 3, color: 'rgba(255, 255, 255, 0.9)' }}>
                <Typography variant="h6" gutterBottom>
                  Important Instructions:
                </Typography>
                <ul style={{ marginBottom: '20px' }}>
                  <li>Time Limit: 30 minutes to complete all questions</li>
                  <li>Question Types: Multiple choice questions with single correct answer</li>
                  <li>Scoring: Each question carries equal marks</li>
                  <li>Navigation: You can move between questions freely</li>
                </ul>

                <Typography variant="h6" gutterBottom>
                  Assessment Rules:
                </Typography>
                <ul style={{ marginBottom: '20px' }}>
                  <li>Select the most appropriate answer for each question</li>
                  <li>You can change your answers before final submission</li>
                  <li>Use the difficulty filters to focus on specific question levels</li>
                  <li>Review your answers before submitting</li>
                  <li>Explanations will be available after submission</li>
                </ul>

                <Typography variant="h6" gutterBottom>
                  Difficulty Levels:
                </Typography>
                <ul style={{ marginBottom: '20px' }}>
                  <li><strong>Beginner:</strong> Basic concepts and definitions</li>
                  <li><strong>Intermediate:</strong> Application and understanding</li>
                  <li><strong>Advanced:</strong> Analysis and technical details</li>
                </ul>

                <Typography variant="h6" gutterBottom>
                  After Submission:
                </Typography>
                <ul>
                  <li>Review correct answers and explanations</li>
                  <li>Check your total score</li>
                  <li>Provide feedback for improvement</li>
                  <li>Report any technical issues encountered</li>
                </ul>
              </Box>
            </Collapse>
          </Box>

          {/* Assessment Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h3" component="h1" gutterBottom sx={{ 
              fontWeight: 700,
              background: 'linear-gradient(45deg, #00a3ff, #00ff88)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 4,
              textAlign: 'center'
            }}>
              Lab Assessment
            </Typography>

            <Paper sx={{ 
              p: 4, 
              mb: 4,
              backgroundColor: 'rgba(30, 30, 30, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: 2,
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}>
              {myQuestions.map((question, index) => (
                difficulties.includes(question.difficulty) && (
                  <Box key={index} sx={{ 
                    mb: 4,
                    p: 3,
                    borderRadius: 1,
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}>
                    <Typography variant="h6" gutterBottom sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      {index + 1}. {question.question}
                    </Typography>
                    <FormControl component="fieldset">
                      <RadioGroup
                        value={answers[index] || ''}
                        onChange={(e) => handleAnswerChange(index, e.target.value)}
                      >
                        {Object.entries(question.answers).map(([key, value]) => (
                          <FormControlLabel
                            key={key}
                            value={key}
                            control={
                              <Radio 
                                sx={{
                                  color: 'rgba(255, 255, 255, 0.7)',
                                  '&.Mui-checked': {
                                    color: score !== null ? 
                                      (key === question.correctAnswer ? '#00ff88' : '#ff4444') : 
                                      '#00a3ff'
                                  }
                                }}
                              />
                            }
                            label={value}
                            sx={{
                              color: score !== null ? (
                                key === question.correctAnswer ? '#00ff88' :
                                answers[index] === key ? '#ff4444' : 'rgba(255, 255, 255, 0.7)'
                              ) : 'rgba(255, 255, 255, 0.7)'
                            }}
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>

                    {score !== null && (
                      <Box sx={{ mt: 2 }}>
                        <IconButton
                          onClick={() => setShowExplanations(prev => ({
                            ...prev,
                            [index]: !prev[index]
                          }))}
                          sx={{ 
                            color: 'rgba(255, 255, 255, 0.7)',
                            transform: showExplanations[index] ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease'
                          }}
                        >
                          <ExpandMoreIcon />
                        </IconButton>
                        <Collapse in={showExplanations[index]}>
                          <Typography sx={{ 
                            pl: 2, 
                            color: 'rgba(255, 255, 255, 0.6)',
                            py: 2,
                            borderLeft: '2px solid rgba(255, 255, 255, 0.1)'
                          }}>
                            {question.explanations[answers[index]] || 
                             "Please select an answer to see the explanation."}
                          </Typography>
                        </Collapse>
                      </Box>
                    )}
                  </Box>
                )
              ))}

              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{
                    mt: 4,
                    px: 6,
                    py: 1.5,
                    background: 'linear-gradient(45deg, #00a3ff, #00ff88)',
                    borderRadius: '50px',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    textTransform: 'none',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #0093e9, #00e67a)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 24px rgba(0, 163, 255, 0.3)'
                    }
                  }}
                >
                  Submit
                </Button>
              </Box>

              {score !== null && (
                <Typography 
                  variant="h5" 
                  sx={{ 
                    mt: 4,
                    textAlign: 'center',
                    color: 'rgba(255, 255, 255, 0.9)',
                    background: 'linear-gradient(45deg, #00a3ff, #00ff88)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 600
                  }}
                >
                  Score: {score.correct} out of {score.total}
                </Typography>
              )}
            </Paper>
          </motion.div>

          {/* Feedback and Bug Report Section */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 4 
          }}>
            <BugReport 
              learningUnit="Lab Assessment"
              taskName="Quiz"
            />
            <RatingSubmit 
              learningUnit="Lab Assessment"
              taskName="Quiz"
            />
          </Box>
        </Container>
      </Box>

      {/* Sidebar */}
      <Sidebar>
        {/* Sidebar Content */}
        <Box sx={{ p: 2, color: 'white' }}>
          <Typography variant="h6" sx={{ mb: 2, color: 'white' }}>
            Assessment Navigation
          </Typography>
          
          {/* Difficulty Filters */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle2" sx={{ mb: 1, color: 'rgba(255,255,255,0.7)' }}>
              Difficulty Levels
            </Typography>
            <FormGroup>
              {['beginner', 'intermediate', 'advanced'].map((diff) => (
                <FormControlLabel
                  key={diff}
                  control={
                    <Checkbox
                      checked={difficulties.includes(diff)}
                      onChange={() => handleDifficultyChange(diff)}
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        '&.Mui-checked': {
                          color: '#00ff88'
                        }
                      }}
                    />
                  }
                  label={diff.charAt(0).toUpperCase() + diff.slice(1)}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)'
                  }}
                />
              ))}
            </FormGroup>
          </Box>

          {/* Question Navigation */}
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1, color: 'rgba(255,255,255,0.7)' }}>
              Questions
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {myQuestions.map((_, index) => (
                <IconButton
                  key={index}
                  onClick={() => {
                    // Scroll to question
                    document.getElementById(`question-${index}`)?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'center'
                    });
                  }}
                  sx={{
                    width: 32,
                    height: 32,
                    color: answers[index] ? '#00ff88' : 'rgba(255,255,255,0.7)',
                    border: '1px solid',
                    borderColor: answers[index] ? '#00ff88' : 'rgba(255,255,255,0.2)',
                    '&:hover': {
                      bgcolor: 'rgba(0,255,136,0.1)'
                    }
                  }}
                >
                  {index + 1}
                </IconButton>
              ))}
            </Box>
          </Box>
        </Box>
      </Sidebar>
    </Box>
  );
};

export default LabAssessment; 