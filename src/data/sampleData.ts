import { Course, Partner } from '../types';

export const sampleCourses: Course[] = [
  {
    id: '1',
    title: 'Bachelor of Technology - Computer Science',
    institution: 'MIT University',
    type: 'B.Tech',
    duration: '4 years',
    mode: 'Online',
    description: 'Comprehensive computer science program covering algorithms, data structures, software engineering, and modern technologies.',
    image: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=500',
    featured: true
  },
  {
    id: '2',
    title: 'Bachelor of Education - Mathematics',
    institution: 'Stanford Education Institute',
    type: 'B.Ed',
    duration: '2 years',
    mode: 'Hybrid',
    description: 'Professional teaching program focused on mathematics education, pedagogy, and classroom management.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=500',
    featured: true
  },
  {
    id: '3',
    title: 'Master of Business Administration',
    institution: 'Harvard Business School',
    type: 'MBA',
    duration: '2 years',
    mode: 'Online',
    description: 'Advanced business administration program covering strategy, finance, marketing, and leadership.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: '4',
    title: 'Bachelor of Science - Data Science',
    institution: 'Tech Valley University',
    type: 'B.Sc',
    duration: '3 years',
    mode: 'Offline',
    description: 'Cutting-edge data science program covering machine learning, statistics, and big data analytics.',
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: '5',
    title: 'Master of Education - Curriculum Design',
    institution: 'Global Education Academy',
    type: 'M.Ed',
    duration: '1.5 years',
    mode: 'Online',
    description: 'Advanced education program focusing on curriculum development and educational leadership.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: '6',
    title: 'Bachelor of Arts - Digital Marketing',
    institution: 'Creative Institute',
    type: 'B.A',
    duration: '3 years',
    mode: 'Hybrid',
    description: 'Modern marketing program covering digital strategies, social media, and content creation.',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=500'
  }
];

export const samplePartners: Partner[] = [
  {
    id: '1',
    name: 'MIT University',
    email: 'partnerships@mit.edu',
    phone: '+1-555-0123',
    address: '77 Massachusetts Ave, Cambridge, MA 02139',
    profileImage: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'Leading technology university with world-class engineering and computer science programs.'
  },
  {
    id: '2',
    name: 'Stanford Education Institute',
    email: 'info@stanford-edu.org',
    phone: '+1-555-0456',
    address: '450 Serra Mall, Stanford, CA 94305',
    profileImage: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'Premier education institute specializing in teacher training and educational research.'
  },
  {
    id: '3',
    name: 'Harvard Business School',
    email: 'admissions@hbs.edu',
    phone: '+1-555-0789',
    address: 'Soldiers Field, Boston, MA 02163',
    profileImage: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'World-renowned business school offering top-tier MBA and executive education programs.'
  },
  {
    id: '4',
    name: 'Tech Valley University',
    email: 'contact@techvalley.edu',
    phone: '+1-555-0321',
    address: '1000 Innovation Blvd, San Jose, CA 95134',
    profileImage: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'Modern university focused on technology, innovation, and practical skill development.'
  },
  {
    id: '5',
    name: 'Global Education Academy',
    email: 'partnerships@globaledu.org',
    phone: '+1-555-0654',
    address: '500 Learning Lane, Austin, TX 78701',
    profileImage: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'International education provider with focus on online learning and global accessibility.'
  },
  {
    id: '6',
    name: 'Creative Institute',
    email: 'hello@creativeinstitute.com',
    phone: '+1-555-0987',
    address: '200 Design District, New York, NY 10001',
    profileImage: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'Innovative institute specializing in creative arts, design, and digital marketing education.'
  }
];