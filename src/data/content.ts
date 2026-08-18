import {
  Flower2,
  Heart,
  Leaf,
  Moon,
  Sparkles,
  Sun,
  Waves,
  Wind,
  type LucideIcon,
} from 'lucide-react';

export type YogaClass = {
  id: string;
  name: string;
  description: string;
  level: 'Beginner' | 'All Levels' | 'Intermediate' | 'Advanced';
  duration: string;
  intensity: 'Gentle' | 'Moderate' | 'Vigorous';
  icon: LucideIcon;
};

export const classes: YogaClass[] = [
  {
    id: 'hatha',
    name: 'Hatha Foundations',
    description:
      'A grounding practice focused on alignment, breath, and the classical postures. The perfect place to begin or return to the roots.',
    level: 'Beginner',
    duration: '60 min',
    intensity: 'Gentle',
    icon: Leaf,
  },
  {
    id: 'vinyasa',
    name: 'Vinyasa Flow',
    description:
      'Move with your breath through a creative, fluid sequence. Build heat, strength, and grace as one posture dissolves into the next.',
    level: 'All Levels',
    duration: '75 min',
    intensity: 'Moderate',
    icon: Wind,
  },
  {
    id: 'yin',
    name: 'Yin & Restore',
    description:
      'Long, passive holds that open the deeper connective tissue. A meditative practice that invites stillness and surrender.',
    level: 'All Levels',
    duration: '70 min',
    intensity: 'Gentle',
    icon: Moon,
  },
  {
    id: 'power',
    name: 'Power Vinyasa',
    description:
      'An athletic, sweaty flow that builds stamina and core strength. Come ready to move, breathe hard, and find your edge.',
    level: 'Advanced',
    duration: '75 min',
    intensity: 'Vigorous',
    icon: Sun,
  },
  {
    id: 'meditation',
    name: 'Mindful Meditation',
    description:
      'Guided breathwork and meditation to quiet the mind. Learn techniques you can carry into every corner of your day.',
    level: 'Beginner',
    duration: '45 min',
    intensity: 'Gentle',
    icon: Sparkles,
  },
  {
    id: 'prenatal',
    name: 'Prenatal Glow',
    description:
      'A nurturing practice designed for expecting mothers. Safe, supportive postures that build strength and ease for the journey ahead.',
    level: 'All Levels',
    duration: '60 min',
    intensity: 'Gentle',
    icon: Flower2,
  },
];

export type ScheduleEntry = {
  day: string;
  sessions: { time: string; name: string; instructor: string; level: string }[];
};

export const schedule: ScheduleEntry[] = [
  {
    day: 'Monday',
    sessions: [
      { time: '6:30 AM', name: 'Sunrise Vinyasa', instructor: 'Maya Chen', level: 'All Levels' },
      { time: '9:00 AM', name: 'Hatha Foundations', instructor: 'Priya Rao', level: 'Beginner' },
      { time: '6:00 PM', name: 'Power Vinyasa', instructor: 'Diego Alvarez', level: 'Advanced' },
      { time: '7:30 PM', name: 'Yin & Restore', instructor: 'Priya Rao', level: 'All Levels' },
    ],
  },
  {
    day: 'Tuesday',
    sessions: [
      { time: '7:00 AM', name: 'Mindful Meditation', instructor: 'Amara Johnson', level: 'Beginner' },
      { time: '9:30 AM', name: 'Prenatal Glow', instructor: 'Priya Rao', level: 'All Levels' },
      { time: '6:00 PM', name: 'Vinyasa Flow', instructor: 'Maya Chen', level: 'All Levels' },
    ],
  },
  {
    day: 'Wednesday',
    sessions: [
      { time: '6:30 AM', name: 'Sunrise Vinyasa', instructor: 'Diego Alvarez', level: 'All Levels' },
      { time: '12:00 PM', name: 'Lunchbox Flow', instructor: 'Maya Chen', level: 'All Levels' },
      { time: '6:00 PM', name: 'Power Vinyasa', instructor: 'Diego Alvarez', level: 'Advanced' },
    ],
  },
  {
    day: 'Thursday',
    sessions: [
      { time: '7:00 AM', name: 'Hatha Foundations', instructor: 'Priya Rao', level: 'Beginner' },
      { time: '6:00 PM', name: 'Yin & Restore', instructor: 'Amara Johnson', level: 'All Levels' },
      { time: '7:30 PM', name: 'Mindful Meditation', instructor: 'Amara Johnson', level: 'Beginner' },
    ],
  },
  {
    day: 'Friday',
    sessions: [
      { time: '6:30 AM', name: 'Sunrise Vinyasa', instructor: 'Maya Chen', level: 'All Levels' },
      { time: '9:00 AM', name: 'Prenatal Glow', instructor: 'Priya Rao', level: 'All Levels' },
      { time: '6:00 PM', name: 'Friday Flow & Chill', instructor: 'Diego Alvarez', level: 'All Levels' },
    ],
  },
  {
    day: 'Saturday',
    sessions: [
      { time: '8:00 AM', name: 'Weekend Warrior Flow', instructor: 'Diego Alvarez', level: 'Intermediate' },
      { time: '10:00 AM', name: 'Hatha Foundations', instructor: 'Priya Rao', level: 'Beginner' },
      { time: '4:00 PM', name: 'Yin & Restore', instructor: 'Amara Johnson', level: 'All Levels' },
    ],
  },
  {
    day: 'Sunday',
    sessions: [
      { time: '9:00 AM', name: 'Slow Sunday Flow', instructor: 'Maya Chen', level: 'All Levels' },
      { time: '5:00 PM', name: 'Mindful Meditation', instructor: 'Amara Johnson', level: 'Beginner' },
    ],
  },
];

export type Instructor = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
};

export const instructors: Instructor[] = [
  {
    id: 'maya',
    name: 'Maya Chen',
    role: 'Founder & Lead Teacher',
    bio: 'Maya has practiced and taught yoga for over 15 years, blending classical Hatha lineage with modern movement science. She founded Sahaja to make the practice feel like coming home.',
    image: 'https://images.pexels.com/photos/4083050/pexels-photo-4083050.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    specialties: ['Vinyasa', 'Meditation', 'Breathwork'],
  },
  {
    id: 'priya',
    name: 'Priya Rao',
    role: 'Hatha & Prenatal Specialist',
    bio: 'A certified prenatal and Hatha teacher, Priya brings warmth and precision to every session. Her classes are a gentle invitation to listen deeply to your own body.',
    image: 'https://images.pexels.com/photos/6739125/pexels-photo-6739125.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    specialties: ['Hatha', 'Prenatal', 'Restorative'],
  },
  {
    id: 'diego',
    name: 'Diego Alvarez',
    role: 'Power & Mobility Coach',
    bio: 'Diego pairs athletic training with mindful movement. His dynamic classes build real strength while keeping the heart of the practice — presence — at the center.',
    image: 'https://images.pexels.com/photos/4534878/pexels-photo-4534878.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    specialties: ['Power Vinyasa', 'Mobility', 'Core'],
  },
  {
    id: 'amara',
    name: 'Amara Johnson',
    role: 'Meditation & Yin Guide',
    bio: 'Amara holds space for stillness. Trained in mindfulness and Yin traditions, her sessions offer a quiet refuge from the noise — a place to rest and remember.',
    image: 'https://images.pexels.com/photos/6740034/pexels-photo-6740034.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    specialties: ['Yin', 'Meditation', 'Restorative'],
  },
];

export type Plan = {
  id: string;
  name: string;
  price: number;
  cadence: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    id: 'drop-in',
    name: 'Drop In',
    price: 22,
    cadence: '/ class',
    description: 'No commitment. Come whenever the moment calls for it.',
    features: ['Single class access', 'Mat & prop rental', 'All open-level classes', 'No reservation needed'],
  },
  {
    id: 'unlimited',
    name: 'Unlimited Monthly',
    price: 128,
    cadence: '/ month',
    description: 'Our most loved plan. Practice as often as your heart desires.',
    features: ['Unlimited in-studio classes', 'Free mat & towel service', 'Guest pass each month', '10% off workshops', 'Pause anytime'],
    featured: true,
  },
  {
    id: 'classpack',
    name: '10-Class Pack',
    price: 180,
    cadence: 'one-time',
    description: 'Flexibility without the subscription. Six months to use them.',
    features: ['10 in-studio classes', 'Valid for 6 months', 'Shareable with family', 'Never expires early', 'No monthly fee'],
  },
];

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'I came in with a stiff back and a noisier mind. Six months later I move easier than I did at thirty, and I actually know what stillness feels like. Sahaja changed something real in me.',
    author: 'Sophie M.',
    role: 'Member since 2022',
  },
  {
    id: 't2',
    quote:
      'The teachers meet you exactly where you are. There is no performance here, just a room full of people breathing and growing together. It is the most welcoming studio I have ever set foot in.',
    author: 'James O.',
    role: 'Member since 2021',
  },
  {
    id: 't3',
    quote:
      'I started prenatal classes here and never left. Priya made me feel safe through my entire pregnancy. Now my daughter sometimes does the poses with me at home.',
    author: 'Leila K.',
    role: 'Member since 2023',
  },
];

export const heroImages = {
  primary: 'https://images.pexels.com/photos/4457945/pexels-photo-4457945.jpeg?auto=compress&cs=tinysrgb&w=1600',
  secondary: 'https://images.pexels.com/photos/8534435/pexels-photo-8534435.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800',
};

export const philosophyImage =
  'https://images.pexels.com/photos/2985098/pexels-photo-2985098.jpeg?auto=compress&cs=tinysrgb&w=1400';

export const ctaImage =
  'https://images.pexels.com/photos/13865894/pexels-photo-13865894.jpeg?auto=compress&cs=tinysrgb&w=1400';

export const studioImages = [
  'https://images.pexels.com/photos/8436610/pexels-photo-8436610.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/29735924/pexels-photo-29735924.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/8436684/pexels-photo-8436684.jpeg?auto=compress&cs=tinysrgb&w=900',
];
