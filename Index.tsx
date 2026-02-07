import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, BookOpen, ChevronRight, BarChart3, Shield, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-foreground text-lg">TSSM BSCOEP</h1>
              <p className="text-xs text-muted-foreground">
                Bhivrabai Sawant College of Engineering, Pune
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Computer Engineering Department
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Student Attendance
            <br />
            <span className="text-gradient">Management System</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Efficiently track, manage, and analyze student attendance for theory and practical
            subjects. Real-time insights for teachers and students.
          </p>

          {/* Role Selection Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Users className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl text-foreground">Teacher Portal</CardTitle>
                <CardDescription>
                  Record attendance, view analytics, and manage student records
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild size="lg" className="w-full gap-2">
                  <Link to="/teacher">
                    Enter as Teacher
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 hover:border-secondary/50">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary-foreground flex items-center justify-center mb-4 mx-auto group-hover:bg-secondary transition-colors">
                  <BookOpen className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl text-foreground">Student Portal</CardTitle>
                <CardDescription>
                  View your attendance records and track your progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild size="lg" variant="secondary" className="w-full gap-2">
                  <Link to="/student">
                    Enter as Student
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powerful Features
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Everything you need to manage attendance efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-xl bg-info/10 text-info flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Real-time Tracking</h3>
              <p className="text-muted-foreground">
                Instantly record and view attendance with live updates
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Analytics Dashboard</h3>
              <p className="text-muted-foreground">
                Visual insights with charts and detailed reports
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 text-secondary-foreground flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Secure & Reliable</h3>
              <p className="text-muted-foreground">
                Role-based access for teachers and students
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Subjects Covered
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Complete attendance management for all Computer Engineering subjects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <BookOpen className="w-5 h-5 text-info" />
                  Theory Subjects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Database Management System (DBMS)",
                    "Computer Organisation & Microprocessor (COM)",
                    "Internet of Things (IOT)",
                    "Discrete Mathematics (DM)",
                  ].map((subject, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-info/5 text-foreground"
                    >
                      <div className="w-8 h-8 rounded-lg bg-info/20 flex items-center justify-center text-info font-semibold">
                        {index + 1}
                      </div>
                      {subject}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <BookOpen className="w-5 h-5 text-chart-practical" />
                  Practical Subjects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Web Development Lab",
                    "IOT Lab",
                    "DBMS Lab",
                  ].map((subject, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-chart-practical/5 text-foreground"
                    >
                      <div className="w-8 h-8 rounded-lg bg-chart-practical/20 flex items-center justify-center text-chart-practical font-semibold">
                        {index + 1}
                      </div>
                      {subject}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <p className="font-semibold text-foreground">TSSM Bhivrabai Sawant College of Engineering</p>
              <p className="text-sm text-muted-foreground">Pune, Maharashtra</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Computer Engineering Department. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
