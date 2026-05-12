import { useState } from "react";

// ============ ICONS (SVG Components) ============
const DashboardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <rect x="3" y="3" width="7" height="7" rx="1"/>
    <rect x="14" y="3" width="7" height="7" rx="1"/>
    <rect x="3" y="14" width="7" height="7" rx="1"/>
    <rect x="14" y="14" width="7" height="7" rx="1"/>
  </svg>
);

const MessageIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const DatabaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);

const AttendanceIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

const BookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);

const GradeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const AssignmentIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);

const LogoutIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>
);

const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);

// ============ DATA ============
const studentsData = [
  { id: "SC400122", name: "Ken Khoi", class: "Science 4", age: 17, gender: "Male", email: "KKhoi@gmail.com", avatar: "KK", attendance: 92, gpa: 3.8 },
  { id: "SC400123", name: "Zach Sweger", class: "Science 4", age: 18, gender: "Male", email: "ZSweger@gmail.com", avatar: "ZS", attendance: 88, gpa: 3.5 },
  { id: "SC400124", name: "Alice Johnson", class: "Math 3", age: 16, gender: "Female", email: "AJohnson@gmail.com", avatar: "AJ", attendance: 95, gpa: 3.9 },
  { id: "SC400125", name: "Bob Martinez", class: "History 2", age: 17, gender: "Male", email: "BMartinez@gmail.com", avatar: "BM", attendance: 79, gpa: 3.2 },
  { id: "SC400126", name: "Sarah Lee", class: "Math 3", age: 16, gender: "Female", email: "SLee@gmail.com", avatar: "SL", attendance: 97, gpa: 4.0 },
  { id: "SC400127", name: "Mike Chen", class: "Science 4", age: 18, gender: "Male", email: "MChen@gmail.com", avatar: "MC", attendance: 85, gpa: 3.6 },
  { id: "SC400128", name: "Emma Davis", class: "English 1", age: 15, gender: "Female", email: "EDavis@gmail.com", avatar: "ED", attendance: 91, gpa: 3.7 },
  { id: "SC400129", name: "James Wilson", class: "History 2", age: 17, gender: "Male", email: "JWilson@gmail.com", avatar: "JW", attendance: 83, gpa: 3.3 },
];

const teachersData = [
  { id: "TC100011", name: "Dr. Amanda Rose", subject: "Mathematics", class: "Math 3", age: 35, gender: "Female", email: "ARose@school.com", avatar: "AR", experience: "8 years" },
  { id: "TC100012", name: "Prof. John Smith", subject: "Science", class: "Science 4", age: 42, gender: "Male", email: "JSmith@school.com", avatar: "JS", experience: "15 years" },
  { id: "TC100013", name: "Ms. Rachel Brown", subject: "English", class: "English 1", age: 29, gender: "Female", email: "RBrown@school.com", avatar: "RB", experience: "4 years" },
  { id: "TC100014", name: "Mr. David Clark", subject: "History", class: "History 2", age: 38, gender: "Male", email: "DClark@school.com", avatar: "DC", experience: "11 years" },
];

const staffData = [
  { id: "ST200001", name: "Maria Garcia", role: "Admin Secretary", age: 32, gender: "Female", email: "MGarcia@school.com", avatar: "MG" },
  { id: "ST200002", name: "Tom Harris", role: "IT Support", age: 27, gender: "Male", email: "THarris@school.com", avatar: "TH" },
  { id: "ST200003", name: "Lisa Thompson", role: "Librarian", age: 45, gender: "Female", email: "LThompson@school.com", avatar: "LT" },
  { id: "ST200004", name: "Kevin Wright", role: "Counselor", age: 39, gender: "Male", email: "KWright@school.com", avatar: "KW" },
];

const messagesData = [
  { id: 1, from: "Dr. Amanda Rose", avatar: "AR", subject: "Math Test Next Week", preview: "Please remind students about the upcoming calculus test...", time: "10:30 AM", unread: true, full: "Dear students, I wanted to remind everyone that we have our calculus mid-term test next Friday. Please review chapters 5-8 and practice the sample problems I shared last week." },
  { id: 2, from: "Principal Office", avatar: "PO", subject: "School Holiday Notice", preview: "School will be closed on June 15th due to...", time: "Yesterday", unread: true, full: "This is to inform all students and staff that school will be closed on June 15th, 2024 due to the annual school maintenance day. Classes will resume normally on June 16th." },
  { id: 3, from: "Prof. John Smith", avatar: "JS", subject: "Science Lab Assignment", preview: "Your lab report is due this coming Monday...", time: "Mon", unread: false, full: "Hi class, just a reminder that your science lab report on chemical reactions is due this Monday. Please submit it through the online portal by 11:59 PM." },
  { id: 4, from: "Ms. Rachel Brown", avatar: "RB", subject: "English Essay Feedback", preview: "I have reviewed your essays and have some comments...", time: "Sun", unread: false, full: "I've finished reviewing all your essays. Overall, great work! I've uploaded individual feedback to your student portals. Please check and let me know if you have questions." },
  { id: 5, from: "Library", avatar: "LB", subject: "Book Return Reminder", preview: "You have books due for return by end of this week...", time: "Sat", unread: true, full: "This is a reminder that you have 2 books due for return by this Friday. Please return them to avoid late fees. Thank you!" },
];

const schedulesData = [
  { id: 1, title: "Math Mid-Term Exam", date: "June 9, 2024 at 9:00 am", color: "#4CAF50", img: "📝" },
  { id: 2, title: "Soccer Competition", date: "June 21, 2024 at 8:00 am", color: "#2196F3", img: "⚽" },
  { id: 3, title: "Science Lab Session", date: "June 24, 2024 at 1:00 pm", color: "#FF9800", img: "🔬" },
  { id: 4, title: "School President Election", date: "June 25, 2024 at 10:00 am", color: "#9C27B0", img: "🗳️" },
  { id: 5, title: "Annual Sports Day", date: "June 28, 2024 at 7:30 am", color: "#F44336", img: "🏃" },
];

const assignmentsData = [
  { id: 1, subject: "Mathematics", title: "Calculus Problem Set 5", dueDate: "2024-06-14", status: "pending", grade: null, description: "Complete problems 1-20 from chapter 8. Show all working steps." },
  { id: 2, subject: "Science", title: "Chemical Reactions Lab Report", dueDate: "2024-06-10", status: "submitted", grade: "A-", description: "Write a detailed lab report on the experiment conducted in class." },
  { id: 3, subject: "English", title: "Persuasive Essay", dueDate: "2024-06-07", status: "graded", grade: "B+", description: "Write a 500-word persuasive essay on a topic of your choice." },
  { id: 4, subject: "History", title: "World War II Timeline", dueDate: "2024-06-18", status: "pending", grade: null, description: "Create a detailed timeline of major WWII events from 1939-1945." },
  { id: 5, subject: "Mathematics", title: "Statistics Quiz Prep", dueDate: "2024-06-20", status: "pending", grade: null, description: "Review all statistics formulas and solve practice questions." },
];

const gradesData = [
  { subject: "Mathematics", teacher: "Dr. Amanda Rose", q1: 88, q2: 92, q3: 85, q4: 90, final: "A-", gpa: 3.7 },
  { subject: "Science", teacher: "Prof. John Smith", q1: 95, q2: 88, q3: 92, q4: 96, final: "A", gpa: 4.0 },
  { subject: "English", teacher: "Ms. Rachel Brown", q1: 78, q2: 82, q3: 80, q4: 85, final: "B+", gpa: 3.3 },
  { subject: "History", teacher: "Mr. David Clark", q1: 85, q2: 87, q3: 90, q4: 88, final: "A-", gpa: 3.7 },
  { subject: "Physical Education", teacher: "Coach Williams", q1: 95, q2: 95, q3: 95, q4: 95, final: "A", gpa: 4.0 },
];

const attendanceLog = [
  { date: "Jun 3", status: "present" }, { date: "Jun 4", status: "present" },
  { date: "Jun 5", status: "absent" }, { date: "Jun 6", status: "present" },
  { date: "Jun 7", status: "present" }, { date: "Jun 10", status: "present" },
  { date: "Jun 11", status: "late" }, { date: "Jun 12", status: "present" },
  { date: "Jun 13", status: "present" }, { date: "Jun 14", status: "present" },
  { date: "Jun 17", status: "present" }, { date: "Jun 18", status: "absent" },
  { date: "Jun 19", status: "present" }, { date: "Jun 20", status: "present" },
  { date: "Jun 21", status: "present" },
];

// ============ MINI CHART (Canvas-free SVG chart) ============
const LineChart = ({ data, color = "#4CAF50" }) => {
  const w = 400, h = 150;
  const points = data.map((v, i) => ({ x: (i / (data.length - 1)) * w, y: h - (v / 100) * h }));
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
  const area = path + ` L${w},${h} L0,${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-32">
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3"/>
          <stop offset="100%" stopColor={color} stopOpacity="0.0"/>
        </linearGradient>
      </defs>
      <path d={area} fill="url(#grad)"/>
      <path d={path} fill="none" stroke={color} strokeWidth="2.5"/>
      {points.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r="3" fill={color}/>)}
    </svg>
  );
};

const BarChart = ({ data, color = "#4CAF50" }) => {
  const max = Math.max(...data.map(d => d.value));
  const w = 300, h = 150;
  const barW = 40, gap = (w - data.length * barW) / (data.length + 1);
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-32">
      {data.map((d, i) => {
        const barH = (d.value / max) * (h - 20);
        const x = gap + i * (barW + gap);
        const y = h - barH - 10;
        return (
          <g key={i}>
            <rect x={x} y={y} width={barW} height={barH} rx="4"
              fill={i === 1 ? color : color + "60"}/>
            <text x={x + barW / 2} y={h} textAnchor="middle" fontSize="10" fill="#888">{d.label}</text>
          </g>
        );
      })}
    </svg>
  );
};

// ============ MINI CALENDAR ============
const MiniCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 5, 9));
  const today = 9;
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);
  const events = [9, 21, 24, 25];
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-800">{monthNames[month]} {year}</h3>
        <div className="flex gap-2">
          <button onClick={() => setCurrentDate(new Date(year, month - 1))} className="text-green-500 hover:bg-green-50 p-1 rounded"><ChevronLeft/></button>
          <button onClick={() => setCurrentDate(new Date(year, month + 1))} className="text-green-500 hover:bg-green-50 p-1 rounded"><ChevronRight/></button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-xs text-center mb-2">
        {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d => (
          <div key={d} className="text-gray-500 font-semibold py-1">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {days.map((d, i) => (
          <div key={i} className={`w-7 h-7 mx-auto flex items-center justify-center rounded-full text-xs cursor-pointer transition-colors
            ${d === today ? "bg-green-500 text-white font-bold" : d ? "hover:bg-green-50 text-gray-700" : ""}
            ${events.includes(d) && d !== today ? "relative" : ""}`}>
            {d}
            {events.includes(d) && d !== today && <span className="absolute bottom-0 right-0 w-1 h-1 bg-red-400 rounded-full"></span>}
          </div>
        ))}
      </div>
    </div>
  );
};

// ============ LOGIN PAGE ============
const LoginPage = ({ onLogin }) => {
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) { setError("Please fill all fields"); return; }
    if (role === "student" && email === "student@school.com" && password === "student123") {
      onLogin("student", { name: "Ken Khoi", id: "SC400122", class: "Science 4", avatar: "KK" });
    } else if (role === "teacher" && email === "teacher@school.com" && password === "teacher123") {
      onLogin("teacher", { name: "Muh. Bambang", id: "TC100011", subject: "All Subjects", avatar: "MB" });
    } else {
      setError("Invalid credentials. Try: student@school.com / student123 or teacher@school.com / teacher123");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
        <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
              <span className="text-green-500 font-bold text-lg">S</span>
            </div>
            <h1 className="text-white text-2xl font-bold">School</h1>
          </div>
          <p className="text-green-100 text-sm">School Management System</p>
        </div>
        <div className="p-8">
          <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
            <button onClick={() => setRole("student")} className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${role === "student" ? "bg-white text-green-600 shadow" : "text-gray-500"}`}>Student</button>
            <button onClick={() => setRole("teacher")} className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${role === "teacher" ? "bg-white text-green-600 shadow" : "text-gray-500"}`}>Teacher</button>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder={role === "student" ? "student@school.com" : "teacher@school.com"}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-300"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                placeholder={role === "student" ? "student123" : "teacher123"}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-300"/>
            </div>
            {error && <div className="bg-red-50 text-red-500 text-xs p-3 rounded-lg">{error}</div>}
            <button type="submit" className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
              Sign In as {role === "student" ? "Student" : "Teacher"}
            </button>
          </form>
          <div className="mt-6 p-4 bg-gray-50 rounded-xl">
            <p className="text-xs text-gray-500 font-semibold mb-2">Demo Credentials:</p>
            <p className="text-xs text-gray-500">👤 Student: student@school.com / student123</p>
            <p className="text-xs text-gray-500">👨‍🏫 Teacher: teacher@school.com / teacher123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============ TEACHER DASHBOARD ============
const TeacherDashboard = ({ user, onLogout }) => {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("Student");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [messages, setMessages] = useState(messagesData);
  const [composeOpen, setComposeOpen] = useState(false);
  const [newMsg, setNewMsg] = useState({ to: "", subject: "", body: "" });
  const [attendanceFilter, setAttendanceFilter] = useState("All");
  const [notification, setNotification] = useState(null);

  const navItems = [
    { name: "Dashboard", icon: <DashboardIcon/> },
    { name: "Messenger", icon: <MessageIcon/>, badge: messages.filter(m => m.unread).length },
    { name: "Calendar", icon: <CalendarIcon/> },
    { name: "Database", icon: <DatabaseIcon/> },
    { name: "Attendance", icon: <AttendanceIcon/> },
    { name: "Settings", icon: <SettingsIcon/> },
  ];

  const lineData = [40, 55, 45, 60, 80, 95, 85, 75, 60, 70, 80, 90, 85, 95, 88, 92, 85, 70, 65, 75, 80];
  const barData = [
    { label: "Mar", value: 25 }, { label: "Apr", value: 37 },
    { label: "May", value: 30 }, { label: "Jun", value: 15 },
  ];

  const showToast = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const markAttendance = (studentId, status) => {
    showToast(`Attendance marked as ${status} for student ${studentId}`);
  };

  const filteredStudents = studentsData.filter(s =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderContent = () => {
    switch(activeNav) {
      case "Dashboard": return <TeacherDashboardContent filteredStudents={filteredStudents} activeTab={activeTab} setActiveTab={setActiveTab} lineData={lineData} barData={barData}/>;
      case "Messenger": return <TeacherMessenger messages={messages} setMessages={setMessages} selectedMessage={selectedMessage} setSelectedMessage={setSelectedMessage} composeOpen={composeOpen} setComposeOpen={setComposeOpen} newMsg={newMsg} setNewMsg={setNewMsg} showToast={showToast}/>;
      case "Calendar": return <TeacherCalendar showToast={showToast}/>;
      case "Database": return <TeacherDatabase filteredStudents={filteredStudents}/>;
      case "Attendance": return <TeacherAttendance attendanceFilter={attendanceFilter} setAttendanceFilter={setAttendanceFilter} markAttendance={markAttendance}/>;
      case "Settings": return <TeacherSettings user={user} showToast={showToast}/>;
      default: return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
      {/* Toast */}
      {notification && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg text-sm animate-pulse">
          ✓ {notification}
        </div>
      )}
      {/* Sidebar */}
      <div className="w-56 bg-white border-r border-gray-100 flex flex-col py-6 px-4 shadow-sm flex-shrink-0">
        <div className="flex items-center gap-2 mb-10 px-2">
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="font-bold text-xl text-gray-800">School</span>
        </div>
        <nav className="flex-1 space-y-1">
          {navItems.map(item => (
            <button key={item.name} onClick={() => setActiveNav(item.name)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeNav === item.name ? "bg-green-50 text-green-600" : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"}`}>
              <span>{item.icon}</span>
              <span>{item.name}</span>
              {item.badge > 0 && <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{item.badge}</span>}
            </button>
          ))}
        </nav>
        <button onClick={onLogout} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-400 hover:bg-red-50 transition-all mt-4">
          <LogoutIcon/><span>Logout</span>
        </button>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
          <div className="relative flex-1 max-w-md">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
            <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search for student, teacher, document..."
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-200"/>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <button onClick={() => setShowNotifications(!showNotifications)} className="relative p-2 hover:bg-gray-50 rounded-xl">
                <BellIcon/><span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              {showNotifications && (
                <div className="absolute right-0 top-10 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 z-50">
                  <div className="p-4 border-b border-gray-100"><h3 className="font-bold text-gray-800">Notifications</h3></div>
                  {[
                    { text: "New student enrolled: Emma Davis", time: "2 min ago" },
                    { text: "3 assignment submissions pending review", time: "1 hour ago" },
                    { text: "Parent meeting scheduled for tomorrow", time: "2 hours ago" },
                  ].map((n, i) => (
                    <div key={i} className="p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-50">
                      <p className="text-sm text-gray-700">{n.text}</p>
                      <p className="text-xs text-gray-400 mt-1">{n.time}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 px-3 py-2 rounded-xl">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold">{user.avatar}</div>
              <span className="text-sm font-medium text-gray-700">{user.name}</span>
            </div>
          </div>
        </div>

        {/* Page Content + Right Panel */}
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6">{renderContent()}</div>
          {/* Right Panel */}
          <div className="w-72 bg-white border-l border-gray-100 p-5 overflow-y-auto flex-shrink-0">
            <MiniCalendar/>
            <div className="mt-6">
              <h3 className="font-bold text-gray-800 mb-4">Schedule</h3>
              <div className="space-y-3">
                {schedulesData.map(s => (
                  <div key={s.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl hover:bg-green-50 cursor-pointer transition-colors">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-lg shadow-sm flex-shrink-0">{s.img}</div>
                    <div>
                      <p className="text-xs font-semibold text-gray-800 leading-tight">{s.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{s.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ---- Teacher Dashboard Content ----
const TeacherDashboardContent = ({ filteredStudents, activeTab, setActiveTab, lineData, barData }) => (
  <div>
    <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
    {/* Stats */}
    <div className="grid grid-cols-3 gap-4 mb-6">
      {[
        { label: "Students", value: 302, icon: "🎓", color: "from-green-400 to-green-500" },
        { label: "Teachers", value: 33, icon: "👨‍🏫", color: "from-yellow-400 to-orange-400" },
        { label: "Staffs", value: 28, icon: "👤", color: "from-purple-400 to-purple-500" },
      ].map(stat => (
        <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-2xl`}>{stat.icon}</div>
          <div>
            <p className="text-gray-500 text-sm">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
    {/* Charts */}
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="bg-white rounded-2xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-gray-800">Attendance Overview</h2>
          <select className="text-xs border border-gray-200 rounded-lg px-2 py-1 text-gray-600 focus:outline-none">
            <option>Student</option><option>Teacher</option>
          </select>
        </div>
        <LineChart data={lineData}/>
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          {["Feb","Mar","Apr","May","Jun"].map(m => <span key={m}>{m}</span>)}
        </div>
      </div>
      <div className="bg-white rounded-2xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-gray-800">Productivity</h2>
          <button className="text-gray-400 hover:text-gray-600">⋮</button>
        </div>
        <div className="bg-gray-800 text-white text-xs px-3 py-2 rounded-xl mb-2 w-fit ml-auto">
          <div>Tasks Done</div><div className="font-bold text-lg">37</div>
        </div>
        <BarChart data={barData}/>
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          {barData.map(d => <span key={d.label}>{d.label}</span>)}
        </div>
      </div>
    </div>
    {/* Students Table */}
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
        <div className="flex gap-6">
          {["Student","Teacher","Staff"].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`text-sm font-semibold pb-2 transition-colors ${activeTab === tab ? "text-green-500 border-b-2 border-green-500" : "text-gray-400 hover:text-gray-600"}`}>{tab}</button>
          ))}
        </div>
        <button className="text-gray-400 hover:text-gray-600">⋮</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-xs text-gray-500 border-b border-gray-50">
              <th className="text-left px-6 py-3 font-medium">Name</th>
              <th className="text-left px-6 py-3 font-medium">ID</th>
              <th className="text-left px-6 py-3 font-medium">{activeTab === "Student" ? "Class" : activeTab === "Teacher" ? "Subject" : "Role"}</th>
              <th className="text-left px-6 py-3 font-medium">Age</th>
              <th className="text-left px-6 py-3 font-medium">Gender</th>
              <th className="text-left px-6 py-3 font-medium">Email</th>
            </tr>
          </thead>
          <tbody>
            {(activeTab === "Student" ? filteredStudents : activeTab === "Teacher" ? teachersData : staffData).map((row, i) => (
              <tr key={i} className="border-b border-gray-50 hover:bg-green-50 transition-colors">
                <td className="px-6 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full flex items-center justify-center text-white text-xs font-bold">{row.avatar}</div>
                    <span className="text-sm font-medium text-gray-700">{row.name}</span>
                  </div>
                </td>
                <td className="px-6 py-3 text-sm text-gray-500">{row.id}</td>
                <td className="px-6 py-3 text-sm text-gray-500">{activeTab === "Student" ? row.class : activeTab === "Teacher" ? row.subject : row.role}</td>
                <td className="px-6 py-3 text-sm text-gray-500">{row.age}</td>
                <td className="px-6 py-3 text-sm text-gray-500">{row.gender}</td>
                <td className="px-6 py-3 text-sm text-gray-500">{row.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

// ---- Teacher Messenger ----
const TeacherMessenger = ({ messages, setMessages, selectedMessage, setSelectedMessage, composeOpen, setComposeOpen, newMsg, setNewMsg, showToast }) => {
  const handleSelect = (msg) => {
    setSelectedMessage(msg);
    setMessages(prev => prev.map(m => m.id === msg.id ? { ...m, unread: false } : m));
  };
  const handleSend = () => {
    if (!newMsg.to || !newMsg.subject) { showToast("Please fill all fields"); return; }
    showToast(`Message sent to ${newMsg.to}`);
    setComposeOpen(false);
    setNewMsg({ to: "", subject: "", body: "" });
  };
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Messenger</h1>
        <button onClick={() => setComposeOpen(true)} className="bg-green-500 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-green-600 transition-colors">+ Compose</button>
      </div>
      {composeOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-full max-w-lg p-6 shadow-2xl">
            <h2 className="font-bold text-lg text-gray-800 mb-4">New Message</h2>
            <div className="space-y-3">
              <input value={newMsg.to} onChange={e => setNewMsg({...newMsg, to: e.target.value})} placeholder="To: (student/class name)"
                className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-200"/>
              <input value={newMsg.subject} onChange={e => setNewMsg({...newMsg, subject: e.target.value})} placeholder="Subject"
                className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-200"/>
              <textarea value={newMsg.body} onChange={e => setNewMsg({...newMsg, body: e.target.value})} placeholder="Write your message..." rows={6}
                className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-200 resize-none"/>
            </div>
            <div className="flex gap-3 mt-4">
              <button onClick={handleSend} className="flex-1 bg-green-500 text-white py-2 rounded-xl text-sm font-medium hover:bg-green-600">Send</button>
              <button onClick={() => setComposeOpen(false)} className="flex-1 border border-gray-200 text-gray-600 py-2 rounded-xl text-sm font-medium hover:bg-gray-50">Cancel</button>
            </div>
          </div>
        </div>
      )}
      <div className="flex gap-4 bg-white rounded-2xl shadow-sm overflow-hidden" style={{minHeight: 500}}>
        <div className="w-72 border-r border-gray-100 flex-shrink-0">
          {messages.map(msg => (
            <div key={msg.id} onClick={() => handleSelect(msg)}
              className={`p-4 cursor-pointer border-b border-gray-50 hover:bg-green-50 transition-colors ${selectedMessage?.id === msg.id ? "bg-green-50 border-l-4 border-l-green-500" : ""} ${msg.unread ? "bg-green-50/30" : ""}`}>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-9 h-9 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{msg.avatar}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className={`text-sm ${msg.unread ? "font-bold text-gray-800" : "font-medium text-gray-700"} truncate`}>{msg.from}</p>
                    <p className="text-xs text-gray-400 ml-2 flex-shrink-0">{msg.time}</p>
                  </div>
                  <p className="text-xs text-gray-500 truncate">{msg.subject}</p>
                </div>
                {msg.unread && <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>}
              </div>
              <p className="text-xs text-gray-400 truncate ml-12">{msg.preview}</p>
            </div>
          ))}
        </div>
        <div className="flex-1 p-6">
          {selectedMessage ? (
            <div>
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">{selectedMessage.avatar}</div>
                <div>
                  <h2 className="font-bold text-gray-800">{selectedMessage.subject}</h2>
                  <p className="text-sm text-gray-500">From: {selectedMessage.from} · {selectedMessage.time}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{selectedMessage.full}</p>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <textarea placeholder="Write a reply..." rows={3} className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-200 resize-none"/>
                <button onClick={() => showToast("Reply sent!")} className="mt-2 bg-green-500 text-white px-6 py-2 rounded-xl text-sm font-medium hover:bg-green-600">Reply</button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <MessageIcon/>
              <p className="mt-2 text-sm">Select a message to read</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ---- Teacher Calendar ----
const TeacherCalendar = ({ showToast }) => {
  const [events, setEvents] = useState(schedulesData.map((s, i) => ({...s, id: i+1})));
  const [showAdd, setShowAdd] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", date: "", img: "📅" });
  const addEvent = () => {
    if (!newEvent.title || !newEvent.date) return;
    setEvents([...events, { ...newEvent, id: events.length + 1, color: "#4CAF50" }]);
    setShowAdd(false); setNewEvent({ title: "", date: "", img: "📅" });
    showToast("Event added successfully!");
  };
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Calendar & Events</h1>
        <button onClick={() => setShowAdd(true)} className="bg-green-500 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-green-600">+ Add Event</button>
      </div>
      {showAdd && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl">
            <h2 className="font-bold text-lg mb-4">Add New Event</h2>
            <div className="space-y-3">
              <input value={newEvent.title} onChange={e => setNewEvent({...newEvent, title: e.target.value})} placeholder="Event title"
                className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-200"/>
              <input type="datetime-local" value={newEvent.date} onChange={e => setNewEvent({...newEvent, date: e.target.value})}
                className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-200"/>
              <select value={newEvent.img} onChange={e => setNewEvent({...newEvent, img: e.target.value})}
                className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none">
                {["📅","📝","🔬","⚽","🏃","🗳️","🎭","🎤"].map(emoji => <option key={emoji} value={emoji}>{emoji}</option>)}
              </select>
            </div>
            <div className="flex gap-3 mt-4">
              <button onClick={addEvent} className="flex-1 bg-green-500 text-white py-2 rounded-xl text-sm font-medium">Add Event</button>
              <button onClick={() => setShowAdd(false)} className="flex-1 border border-gray-200 text-gray-600 py-2 rounded-xl text-sm font-medium">Cancel</button>
            </div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl shadow-sm p-6"><MiniCalendar/></div>
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="font-bold text-gray-800 mb-4">Upcoming Events</h2>
          <div className="space-y-3">
            {events.map(e => (
              <div key={e.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-xl shadow-sm">{e.img}</div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800">{e.title}</p>
                  <p className="text-xs text-gray-400">{e.date}</p>
                </div>
                <button onClick={() => { setEvents(events.filter(ev => ev.id !== e.id)); showToast("Event removed"); }}
                  className="text-red-400 hover:text-red-600 text-xs px-2 py-1 hover:bg-red-50 rounded-lg">✕</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ---- Teacher Database ----
const TeacherDatabase = ({ filteredStudents }) => {
  const [tab, setTab] = useState("Students");
  const [showAdd, setShowAdd] = useState(false);
  const [students, setStudents] = useState(studentsData);
  const [newStudent, setNewStudent] = useState({ name: "", id: "", class: "", age: "", gender: "Male", email: "" });
  const addStudent = () => {
    setStudents([...students, { ...newStudent, avatar: newStudent.name.split(" ").map(n=>n[0]).join("").toUpperCase(), attendance: 0, gpa: 0 }]);
    setShowAdd(false);
    setNewStudent({ name: "", id: "", class: "", age: "", gender: "Male", email: "" });
  };
  const data = tab === "Students" ? filteredStudents : tab === "Teachers" ? teachersData : staffData;
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Database</h1>
        <button onClick={() => setShowAdd(true)} className="bg-green-500 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-green-600">+ Add Student</button>
      </div>
      {showAdd && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl">
            <h2 className="font-bold text-lg mb-4">Add New Student</h2>
            <div className="grid grid-cols-2 gap-3">
              {[["name","Full Name"],["id","Student ID"],["class","Class"],["age","Age"],["email","Email"]].map(([field, label]) => (
                <input key={field} value={newStudent[field]} onChange={e => setNewStudent({...newStudent, [field]: e.target.value})}
                  placeholder={label} className="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-200 col-span-2"/>
              ))}
              <select value={newStudent.gender} onChange={e => setNewStudent({...newStudent, gender: e.target.value})}
                className="border border-gray-200 rounded-xl px-3 py-2 text-sm col-span-2">
                <option>Male</option><option>Female</option>
              </select>
            </div>
            <div className="flex gap-3 mt-4">
              <button onClick={addStudent} className="flex-1 bg-green-500 text-white py-2 rounded-xl text-sm font-medium">Add</button>
              <button onClick={() => setShowAdd(false)} className="flex-1 border border-gray-200 text-gray-600 py-2 rounded-xl text-sm font-medium">Cancel</button>
            </div>
          </div>
        </div>
      )}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="flex gap-6 px-6 py-4 border-b border-gray-50">
          {["Students","Teachers","Staff"].map(t => (
            <button key={t} onClick={() => setTab(t)} className={`text-sm font-semibold pb-2 ${tab===t ? "text-green-500 border-b-2 border-green-500" : "text-gray-400"}`}>{t}</button>
          ))}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs text-gray-500 border-b border-gray-50">
                <th className="text-left px-6 py-3 font-medium">Name</th>
                <th className="text-left px-6 py-3 font-medium">ID</th>
                <th className="text-left px-6 py-3 font-medium">{tab === "Students" ? "Class" : tab === "Teachers" ? "Subject" : "Role"}</th>
                {tab === "Students" && <><th className="text-left px-6 py-3 font-medium">Attendance</th><th className="text-left px-6 py-3 font-medium">GPA</th></>}
                {tab === "Teachers" && <th className="text-left px-6 py-3 font-medium">Experience</th>}
                <th className="text-left px-6 py-3 font-medium">Email</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-green-50 transition-colors">
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full flex items-center justify-center text-white text-xs font-bold">{row.avatar}</div>
                      <span className="text-sm font-medium text-gray-700">{row.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-500">{row.id}</td>
                  <td className="px-6 py-3 text-sm text-gray-500">{tab==="Students" ? row.class : tab==="Teachers" ? row.subject : row.role}</td>
                  {tab === "Students" && <>
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-100 rounded-full h-2"><div className="bg-green-500 h-2 rounded-full" style={{width:`${row.attendance}%`}}></div></div>
                        <span className="text-xs text-gray-500">{row.attendance}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-3"><span className={`text-sm font-bold ${row.gpa >= 3.7 ? "text-green-500" : row.gpa >= 3.0 ? "text-yellow-500" : "text-red-400"}`}>{row.gpa}</span></td>
                  </>}
                  {tab === "Teachers" && <td className="px-6 py-3 text-sm text-gray-500">{row.experience}</td>}
                  <td className="px-6 py-3 text-sm text-gray-500">{row.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// ---- Teacher Attendance ----
const TeacherAttendance = ({ attendanceFilter, setAttendanceFilter, markAttendance }) => {
  const [date, setDate] = useState("2024-06-09");
  const [attendance, setAttendance] = useState(
    studentsData.reduce((acc, s) => ({ ...acc, [s.id]: "present" }), {})
  );
  const setStatus = (id, status) => {
    setAttendance(prev => ({ ...prev, [id]: status }));
    markAttendance(id, status);
  };
  const statusColor = { present: "bg-green-100 text-green-600", absent: "bg-red-100 text-red-500", late: "bg-yellow-100 text-yellow-600" };
  const counts = Object.values(attendance).reduce((acc, s) => { acc[s] = (acc[s] || 0) + 1; return acc; }, {});
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Attendance Management</h1>
        <input type="date" value={date} onChange={e => setDate(e.target.value)} className="border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-200"/>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: "Present", count: counts.present || 0, color: "text-green-500", bg: "bg-green-50" },
          { label: "Absent", count: counts.absent || 0, color: "text-red-500", bg: "bg-red-50" },
          { label: "Late", count: counts.late || 0, color: "text-yellow-500", bg: "bg-yellow-50" },
        ].map(stat => (
          <div key={stat.label} className={`${stat.bg} rounded-2xl p-4 text-center`}>
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.count}</p>
            <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="flex gap-3 px-6 py-4 border-b border-gray-50">
          {["All","Present","Absent","Late"].map(f => (
            <button key={f} onClick={() => setAttendanceFilter(f)}
              className={`px-4 py-1.5 rounded-xl text-sm font-medium transition-colors ${attendanceFilter===f ? "bg-green-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>{f}</button>
          ))}
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-xs text-gray-500 border-b border-gray-50">
              <th className="text-left px-6 py-3 font-medium">Student</th>
              <th className="text-left px-6 py-3 font-medium">ID</th>
              <th className="text-left px-6 py-3 font-medium">Class</th>
              <th className="text-left px-6 py-3 font-medium">Status</th>
              <th className="text-left px-6 py-3 font-medium">Mark</th>
            </tr>
          </thead>
          <tbody>
            {studentsData.filter(s => attendanceFilter === "All" || attendance[s.id] === attendanceFilter.toLowerCase()).map(s => (
              <tr key={s.id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="px-6 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full flex items-center justify-center text-white text-xs font-bold">{s.avatar}</div>
                    <span className="text-sm font-medium text-gray-700">{s.name}</span>
                  </div>
                </td>
                <td className="px-6 py-3 text-sm text-gray-500">{s.id}</td>
                <td className="px-6 py-3 text-sm text-gray-500">{s.class}</td>
                <td className="px-6 py-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor[attendance[s.id]]}`}>{attendance[s.id]}</span>
                </td>
                <td className="px-6 py-3">
                  <div className="flex gap-2">
                    {["present","absent","late"].map(status => (
                      <button key={status} onClick={() => setStatus(s.id, status)}
                        className={`px-2 py-1 rounded-lg text-xs font-medium transition-colors ${attendance[s.id]===status ? statusColor[status] : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}>
                        {status[0].toUpperCase()+status.slice(1)}
                      </button>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ---- Teacher Settings ----
const TeacherSettings = ({ user, showToast }) => {
  const [form, setForm] = useState({ name: user.name, email: "teacher@school.com", phone: "+1 234 567 8900", subject: user.subject });
  const [notifSettings, setNotifSettings] = useState({ email: true, sms: false, push: true });
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="font-bold text-gray-800 mb-4">Profile Settings</h2>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-xl font-bold">{user.avatar}</div>
            <div>
              <p className="font-semibold text-gray-800">{user.name}</p>
              <p className="text-sm text-gray-500">Teacher</p>
              <button className="text-green-500 text-xs mt-1 hover:underline">Change Photo</button>
            </div>
          </div>
          <div className="space-y-3">
            {[["name","Full Name"],["email","Email"],["phone","Phone"],["subject","Subject"]].map(([field, label]) => (
              <div key={field}>
                <label className="text-xs text-gray-500 font-medium">{label}</label>
                <input value={form[field]} onChange={e => setForm({...form, [field]: e.target.value})}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-green-200"/>
              </div>
            ))}
          </div>
          <button onClick={() => showToast("Profile updated successfully!")} className="mt-4 w-full bg-green-500 text-white py-2 rounded-xl text-sm font-medium hover:bg-green-600">Save Changes</button>
        </div>
        <div className="space-y-4">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="font-bold text-gray-800 mb-4">Notifications</h2>
            {[["email","Email Notifications"],["sms","SMS Notifications"],["push","Push Notifications"]].map(([key, label]) => (
              <div key={key} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                <span className="text-sm text-gray-700">{label}</span>
                <button onClick={() => setNotifSettings({...notifSettings, [key]: !notifSettings[key]})}
                  className={`w-12 h-6 rounded-full transition-colors ${notifSettings[key] ? "bg-green-500" : "bg-gray-200"}`}>
                  <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform mx-0.5 ${notifSettings[key] ? "translate-x-6" : "translate-x-0"}`}></div>
                </button>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="font-bold text-gray-800 mb-4">Security</h2>
            <button onClick={() => showToast("Password reset email sent!")} className="w-full border border-gray-200 text-gray-600 py-2 rounded-xl text-sm hover:bg-gray-50 mb-2">Change Password</button>
            <button onClick={() => showToast("2FA enabled!")} className="w-full border border-green-200 text-green-600 py-2 rounded-xl text-sm hover:bg-green-50">Enable 2FA</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============ STUDENT DASHBOARD ============
const StudentDashboard = ({ user, onLogout }) => {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [notification, setNotification] = useState(null);
  const [unreadMessages] = useState(3);

  const navItems = [
    { name: "Dashboard", icon: <DashboardIcon/> },
    { name: "My Courses", icon: <BookIcon/> },
    { name: "Assignments", icon: <AssignmentIcon/> },
    { name: "Grades", icon: <GradeIcon/> },
    { name: "Attendance", icon: <AttendanceIcon/> },
    { name: "Messages", icon: <MessageIcon/>, badge: unreadMessages },
    { name: "Calendar", icon: <CalendarIcon/> },
    { name: "Settings", icon: <SettingsIcon/> },
  ];

  const showToast = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const renderContent = () => {
    switch(activeNav) {
      case "Dashboard": return <StudentDashboardContent user={user} setActiveNav={setActiveNav}/>;
      case "My Courses": return <StudentCourses/>;
      case "Assignments": return <StudentAssignments showToast={showToast}/>;
      case "Grades": return <StudentGrades/>;
      case "Attendance": return <StudentAttendance/>;
      case "Messages": return <StudentMessages showToast={showToast}/>;
      case "Calendar": return <StudentCalendar/>;
      case "Settings": return <StudentSettings user={user} showToast={showToast}/>;
      default: return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
      {notification && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg text-sm">
          ✓ {notification}
        </div>
      )}
      {/* Sidebar */}
      <div className="w-56 bg-white border-r border-gray-100 flex flex-col py-6 px-4 shadow-sm flex-shrink-0">
        <div className="flex items-center gap-2 mb-10 px-2">
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="font-bold text-xl text-gray-800">School</span>
        </div>
        <nav className="flex-1 space-y-1">
          {navItems.map(item => (
            <button key={item.name} onClick={() => setActiveNav(item.name)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeNav === item.name ? "bg-green-50 text-green-600" : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"}`}>
              <span>{item.icon}</span>
              <span>{item.name}</span>
              {item.badge > 0 && <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{item.badge}</span>}
            </button>
          ))}
        </nav>
        <button onClick={onLogout} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-400 hover:bg-red-50 transition-all mt-4">
          <LogoutIcon/><span>Logout</span>
        </button>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
          <div>
            <h2 className="font-bold text-gray-800">{activeNav}</h2>
            <p className="text-xs text-gray-400">Student Portal</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold">{user.avatar}</div>
              <div>
                <p className="text-sm font-medium text-gray-700">{user.name}</p>
                <p className="text-xs text-gray-400">{user.class}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6">{renderContent()}</div>
          <div className="w-72 bg-white border-l border-gray-100 p-5 overflow-y-auto flex-shrink-0">
            <MiniCalendar/>
            <div className="mt-6">
              <h3 className="font-bold text-gray-800 mb-4">Upcoming Events</h3>
              <div className="space-y-3">
                {schedulesData.slice(0,4).map(s => (
                  <div key={s.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-lg shadow-sm flex-shrink-0">{s.img}</div>
                    <div>
                      <p className="text-xs font-semibold text-gray-800 leading-tight">{s.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{s.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ---- Student Dashboard Content ----
const StudentDashboardContent = ({ user, setActiveNav }) => {
  const lineData = [70, 75, 68, 80, 85, 92, 88, 90, 87, 92, 88, 95, 90, 88, 92];
  const totalPresent = attendanceLog.filter(d => d.status === "present").length;
  const attendancePct = Math.round((totalPresent / attendanceLog.length) * 100);
  return (
    <div>
      <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-6 mb-6 text-white">
        <p className="text-green-100 text-sm">Welcome back,</p>
        <h1 className="text-2xl font-bold">{user.name} 👋</h1>
        <p className="text-green-100 text-sm mt-1">{user.id} · {user.class}</p>
        <div className="flex gap-4 mt-4">
          {[
            { label: "GPA", value: "3.74" },
            { label: "Attendance", value: `${attendancePct}%` },
            { label: "Rank", value: "#5" },
          ].map(s => (
            <div key={s.label} className="bg-white bg-opacity-20 rounded-xl px-4 py-2 text-center">
              <p className="font-bold text-lg">{s.value}</p>
              <p className="text-xs text-green-100">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="font-bold text-gray-800 mb-3">My Performance</h2>
          <LineChart data={lineData} color="#10B981"/>
        </div>
        <div className="space-y-3">
          {[
            { label: "Pending Assignments", value: 3, color: "text-orange-500", bg: "bg-orange-50", icon: "📝", action: "Assignments" },
            { label: "Unread Messages", value: 3, color: "text-blue-500", bg: "bg-blue-50", icon: "✉️", action: "Messages" },
            { label: "Next Exam", value: "Jun 9", color: "text-purple-500", bg: "bg-purple-50", icon: "📅", action: "Calendar" },
            { label: "Subjects", value: gradesData.length, color: "text-green-500", bg: "bg-green-50", icon: "📚", action: "My Courses" },
          ].map(s => (
            <div key={s.label} onClick={() => setActiveNav(s.action)} className={`${s.bg} rounded-2xl p-4 flex items-center gap-4 cursor-pointer hover:shadow-md transition-shadow`}>
              <span className="text-2xl">{s.icon}</span>
              <div>
                <p className={`font-bold text-xl ${s.color}`}>{s.value}</p>
                <p className="text-xs text-gray-600">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Recent Grades */}
      <div className="bg-white rounded-2xl shadow-sm p-5">
        <h2 className="font-bold text-gray-800 mb-4">Recent Grades</h2>
        <div className="space-y-3">
          {gradesData.map((g, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors">
              <div>
                <p className="text-sm font-semibold text-gray-800">{g.subject}</p>
                <p className="text-xs text-gray-400">{g.teacher}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width:`${(g.gpa/4)*100}%`}}></div>
                </div>
                <span className={`font-bold text-sm ${g.gpa>=3.7?"text-green-500":g.gpa>=3.0?"text-yellow-500":"text-red-400"}`}>{g.final}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ---- Student Courses ----
const StudentCourses = () => {
  const courses = [
    { name: "Mathematics", teacher: "Dr. Amanda Rose", progress: 72, color: "from-blue-400 to-blue-500", icon: "📐", schedule: "Mon, Wed, Fri · 8:00 AM", credits: 4 },
    { name: "Science", teacher: "Prof. John Smith", progress: 85, color: "from-green-400 to-green-500", icon: "🔬", schedule: "Tue, Thu · 10:00 AM", credits: 4 },
    { name: "English", teacher: "Ms. Rachel Brown", progress: 60, color: "from-purple-400 to-purple-500", icon: "📖", schedule: "Mon, Wed · 1:00 PM", credits: 3 },
    { name: "History", teacher: "Mr. David Clark", progress: 78, color: "from-orange-400 to-orange-500", icon: "🏛️", schedule: "Tue, Thu · 2:00 PM", credits: 3 },
    { name: "Physical Education", teacher: "Coach Williams", progress: 95, color: "from-red-400 to-red-500", icon: "⚽", schedule: "Fri · 3:00 PM", credits: 2 },
  ];
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Courses</h1>
      <div className="grid grid-cols-2 gap-4">
        {courses.map((c, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
            <div className={`bg-gradient-to-r ${c.color} p-4 text-white`}>
              <div className="flex items-center justify-between">
                <span className="text-3xl">{c.icon}</span>
                <span className="bg-white bg-opacity-20 px-2 py-1 rounded-lg text-xs">{c.credits} Credits</span>
              </div>
              <h3 className="font-bold text-lg mt-2">{c.name}</h3>
              <p className="text-sm opacity-80">{c.teacher}</p>
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-400 mb-3">📅 {c.schedule}</p>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-600 font-medium">Progress</span>
                <span className="text-xs font-bold text-gray-700">{c.progress}%</span>
              </div>
              <div className="bg-gray-100 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full transition-all" style={{width:`${c.progress}%`}}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ---- Student Assignments ----
const StudentAssignments = ({ showToast }) => {
  const [filter, setFilter] = useState("All");
  const [assignments, setAssignments] = useState(assignmentsData);
  const filtered = assignments.filter(a => filter === "All" || a.status === filter.toLowerCase());
  const statusStyle = { pending: "bg-orange-100 text-orange-600", submitted: "bg-blue-100 text-blue-600", graded: "bg-green-100 text-green-600" };
  const submit = (id) => {
    setAssignments(prev => prev.map(a => a.id === id ? {...a, status: "submitted"} : a));
    showToast("Assignment submitted successfully!");
  };
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Assignments</h1>
      <div className="flex gap-3 mb-6">
        {["All","Pending","Submitted","Graded"].map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${filter===f ? "bg-green-500 text-white" : "bg-white text-gray-600 shadow-sm hover:bg-gray-50"}`}>{f}</button>
        ))}
      </div>
      <div className="space-y-3">
        {filtered.map(a => (
          <div key={a.id} className="bg-white rounded-2xl shadow-sm p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-lg">{a.subject}</span>
                  <span className={`text-xs font-medium px-2 py-1 rounded-lg ${statusStyle[a.status]}`}>{a.status}</span>
                  {a.grade && <span className="text-sm font-bold text-green-500">{a.grade}</span>}
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{a.title}</h3>
                <p className="text-sm text-gray-500">{a.description}</p>
                <p className="text-xs text-gray-400 mt-2">📅 Due: {new Date(a.dueDate).toLocaleDateString("en-US", {weekday:"short", month:"short", day:"numeric"})}</p>
              </div>
              {a.status === "pending" && (
                <button onClick={() => submit(a.id)} className="ml-4 bg-green-500 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-green-600 flex-shrink-0">
                  Submit
                </button>
              )}
            </div>
          </div>
        ))}
        {filtered.length === 0 && <div className="text-center py-12 text-gray-400">No {filter.toLowerCase()} assignments</div>}
      </div>
    </div>
  );
};

// ---- Student Grades ----
const StudentGrades = () => {
  const overallGPA = (gradesData.reduce((sum, g) => sum + g.gpa, 0) / gradesData.length).toFixed(2);
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Grades</h1>
      <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-6 text-white mb-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-green-100 text-sm">Overall GPA</p>
            <p className="text-5xl font-bold">{overallGPA}</p>
            <p className="text-green-100 text-sm mt-1">out of 4.00</p>
          </div>
          <div className="text-right">
            <div className="text-6xl opacity-20">📊</div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="text-xs text-gray-500 border-b border-gray-100">
              <th className="text-left px-6 py-3 font-medium">Subject</th>
              <th className="text-left px-6 py-3 font-medium">Teacher</th>
              <th className="text-center px-4 py-3 font-medium">Q1</th>
              <th className="text-center px-4 py-3 font-medium">Q2</th>
              <th className="text-center px-4 py-3 font-medium">Q3</th>
              <th className="text-center px-4 py-3 font-medium">Q4</th>
              <th className="text-center px-4 py-3 font-medium">Final</th>
              <th className="text-center px-4 py-3 font-medium">GPA</th>
            </tr>
          </thead>
          <tbody>
            {gradesData.map((g, i) => (
              <tr key={i} className="border-b border-gray-50 hover:bg-green-50 transition-colors">
                <td className="px-6 py-4 font-semibold text-gray-800 text-sm">{g.subject}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{g.teacher}</td>
                {[g.q1,g.q2,g.q3,g.q4].map((q, j) => (
                  <td key={j} className="px-4 py-4 text-center">
                    <span className={`text-sm font-medium ${q>=90?"text-green-500":q>=80?"text-blue-500":q>=70?"text-yellow-500":"text-red-400"}`}>{q}</span>
                  </td>
                ))}
                <td className="px-4 py-4 text-center"><span className="font-bold text-gray-800">{g.final}</span></td>
                <td className="px-4 py-4 text-center"><span className={`font-bold ${g.gpa>=3.7?"text-green-500":g.gpa>=3.0?"text-yellow-500":"text-red-400"}`}>{g.gpa}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ---- Student Attendance ----
const StudentAttendance = () => {
  const present = attendanceLog.filter(d => d.status === "present").length;
  const absent = attendanceLog.filter(d => d.status === "absent").length;
  const late = attendanceLog.filter(d => d.status === "late").length;
  const pct = Math.round((present / attendanceLog.length) * 100);
  const statusColor = { present: "bg-green-100 text-green-600", absent: "bg-red-100 text-red-500", late: "bg-yellow-100 text-yellow-600" };
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Attendance</h1>
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: "Attendance Rate", value: `${pct}%`, color: "text-green-500", bg: "from-green-400 to-emerald-500", text: true },
          { label: "Days Present", value: present, color: "text-green-500", bg: "bg-green-50" },
          { label: "Days Absent", value: absent, color: "text-red-500", bg: "bg-red-50" },
          { label: "Late Arrivals", value: late, color: "text-yellow-500", bg: "bg-yellow-50" },
        ].map((s, i) => (
          <div key={i} className={`rounded-2xl p-5 text-center ${i===0 ? "bg-gradient-to-br "+s.bg+" text-white" : s.bg}`}>
            <p className={`text-3xl font-bold ${i===0 ? "text-white" : s.color}`}>{s.value}</p>
            <p className={`text-sm mt-1 ${i===0 ? "text-green-100" : "text-gray-600"}`}>{s.label}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="font-bold text-gray-800 mb-4">Attendance Log</h2>
        <div className="grid grid-cols-5 gap-2">
          {attendanceLog.map((d, i) => (
            <div key={i} className={`rounded-xl p-3 text-center ${statusColor[d.status]}`}>
              <p className="text-xs font-bold">{d.date}</p>
              <p className="text-xs capitalize mt-1">{d.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ---- Student Messages ----
const StudentMessages = ({ showToast }) => {
  const [selected, setSelected] = useState(null);
  const [messages, setMessages] = useState(messagesData);
  const handleSelect = (msg) => {
    setSelected(msg);
    setMessages(prev => prev.map(m => m.id === msg.id ? {...m, unread: false} : m));
  };
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Messages</h1>
      <div className="flex bg-white rounded-2xl shadow-sm overflow-hidden" style={{minHeight: 500}}>
        <div className="w-72 border-r border-gray-100">
          {messages.map(msg => (
            <div key={msg.id} onClick={() => handleSelect(msg)}
              className={`p-4 cursor-pointer border-b border-gray-50 hover:bg-green-50 transition-colors ${selected?.id===msg.id ? "bg-green-50 border-l-4 border-l-green-500" : ""}`}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{msg.avatar}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <p className={`text-sm truncate ${msg.unread ? "font-bold" : "font-medium"} text-gray-800`}>{msg.from}</p>
                    <p className="text-xs text-gray-400">{msg.time}</p>
                  </div>
                  <p className="text-xs text-gray-500 truncate">{msg.subject}</p>
                </div>
                {msg.unread && <div className="w-2 h-2 bg-green-500 rounded-full"></div>}
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 p-6">
          {selected ? (
            <div>
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">{selected.avatar}</div>
                <div>
                  <h2 className="font-bold text-gray-800">{selected.subject}</h2>
                  <p className="text-sm text-gray-500">From: {selected.from} · {selected.time}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{selected.full}</p>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <textarea placeholder="Write a reply..." rows={3} className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-200 resize-none"/>
                <button onClick={() => showToast("Reply sent!")} className="mt-2 bg-green-500 text-white px-6 py-2 rounded-xl text-sm font-medium hover:bg-green-600">Reply</button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <p className="text-4xl mb-2">✉️</p>
              <p className="text-sm">Select a message to read</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ---- Student Calendar ----
const StudentCalendar = () => (
  <div>
    <h1 className="text-2xl font-bold text-gray-800 mb-6">My Calendar</h1>
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-white rounded-2xl shadow-sm p-6"><MiniCalendar/></div>
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="font-bold text-gray-800 mb-4">Upcoming Events</h2>
        <div className="space-y-3">
          {schedulesData.map(s => (
            <div key={s.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-xl shadow-sm">{s.img}</div>
              <div>
                <p className="text-sm font-semibold text-gray-800">{s.title}</p>
                <p className="text-xs text-gray-400">{s.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="bg-white rounded-2xl shadow-sm p-6 mt-6">
      <h2 className="font-bold text-gray-800 mb-4">Class Schedule This Week</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-xs text-gray-500 border-b border-gray-100">
              <th className="text-left py-2 pr-4 font-medium">Time</th>
              {["Monday","Tuesday","Wednesday","Thursday","Friday"].map(d => (
                <th key={d} className="text-center py-2 px-2 font-medium">{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { time: "8:00 AM", Mon: "Math", Tue: "-", Wed: "Math", Thu: "-", Fri: "Math" },
              { time: "10:00 AM", Mon: "-", Tue: "Science", Wed: "-", Thu: "Science", Fri: "-" },
              { time: "1:00 PM", Mon: "English", Tue: "-", Wed: "English", Thu: "-", Fri: "-" },
              { time: "2:00 PM", Mon: "-", Tue: "History", Wed: "-", Thu: "History", Fri: "-" },
              { time: "3:00 PM", Mon: "-", Tue: "-", Wed: "-", Thu: "-", Fri: "PE" },
            ].map((row, i) => (
              <tr key={i} className="border-b border-gray-50">
                <td className="py-3 pr-4 text-gray-500 text-xs font-medium">{row.time}</td>
                {["Mon","Tue","Wed","Thu","Fri"].map(d => (
                  <td key={d} className="text-center py-3 px-2">
                    {row[d] !== "-" ? (
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-lg text-xs font-medium">{row[d]}</span>
                    ) : <span className="text-gray-300">-</span>}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

// ---- Student Settings ----
const StudentSettings = ({ user, showToast }) => {
  const [form, setForm] = useState({ name: user.name, email: "student@school.com", phone: "+1 555 123 4567", id: user.id, class: user.class });
  const [notif, setNotif] = useState({ email: true, push: false });
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="font-bold text-gray-800 mb-4">My Profile</h2>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-xl font-bold">{user.avatar}</div>
            <div>
              <p className="font-semibold text-gray-800">{user.name}</p>
              <p className="text-sm text-gray-500">{user.id} · {user.class}</p>
              <button className="text-green-500 text-xs mt-1 hover:underline">Change Photo</button>
            </div>
          </div>
          <div className="space-y-3">
            {[["name","Full Name"],["email","Email"],["phone","Phone"]].map(([field, label]) => (
              <div key={field}>
                <label className="text-xs text-gray-500 font-medium">{label}</label>
                <input value={form[field]} onChange={e => setForm({...form, [field]: e.target.value})}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-green-200"/>
              </div>
            ))}
            {[["id","Student ID"],["class","Class"]].map(([field, label]) => (
              <div key={field}>
                <label className="text-xs text-gray-500 font-medium">{label}</label>
                <input value={form[field]} readOnly className="w-full border border-gray-100 bg-gray-50 rounded-xl px-3 py-2 text-sm mt-1 text-gray-400 cursor-not-allowed"/>
              </div>
            ))}
          </div>
          <button onClick={() => showToast("Profile updated!")} className="mt-4 w-full bg-green-500 text-white py-2 rounded-xl text-sm font-medium hover:bg-green-600">Save Changes</button>
        </div>
        <div className="space-y-4">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="font-bold text-gray-800 mb-4">Notifications</h2>
            {[["email","Email Alerts"],["push","Push Notifications"]].map(([key, label]) => (
              <div key={key} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                <span className="text-sm text-gray-700">{label}</span>
                <button onClick={() => setNotif({...notif, [key]: !notif[key]})}
                  className={`w-12 h-6 rounded-full transition-colors ${notif[key] ? "bg-green-500" : "bg-gray-200"}`}>
                  <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform mx-0.5 ${notif[key] ? "translate-x-6" : "translate-x-0"}`}></div>
                </button>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="font-bold text-gray-800 mb-4">Security</h2>
            <button onClick={() => showToast("Password reset email sent!")} className="w-full border border-gray-200 text-gray-600 py-2 rounded-xl text-sm hover:bg-gray-50">Change Password</button>
          </div>
          <div className="bg-green-50 rounded-2xl p-5">
            <h3 className="font-bold text-green-800 mb-2">🎓 Academic Info</h3>
            <div className="space-y-2 text-sm text-green-700">
              <p>Student ID: {user.id}</p>
              <p>Class: {user.class}</p>
              <p>Enrollment: September 2022</p>
              <p>Expected Graduation: June 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============ MAIN APP ============
export default function App() {
  const [authState, setAuthState] = useState({ loggedIn: false, role: null, user: null });

  const handleLogin = (role, user) => setAuthState({ loggedIn: true, role, user });
  const handleLogout = () => setAuthState({ loggedIn: false, role: null, user: null });

  if (!authState.loggedIn) return <LoginPage onLogin={handleLogin}/>;
  if (authState.role === "teacher") return <TeacherDashboard user={authState.user} onLogout={handleLogout}/>;
  return <StudentDashboard user={authState.user} onLogout={handleLogout}/>;
}