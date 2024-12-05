import Link from "next/link";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { CardContent, Card } from "~/components/ui/card";
import { BookOpen, Users, Award, BarChart } from "lucide-react";
import { DialogLogin } from "~/components/dialogs/DialogLogin";
import { PreviewMarquee } from "./(main)/_components/PreviewsMarquee";

export default function LMSLandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-14 items-center px-4 lg:px-6">
        <Link className="flex items-center justify-center" href="#">
          <BookOpen className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">EduLMS</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Empower Your Learning Journey
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover a new way of learning with our comprehensive Learning
                  Management System. Engage, track, and succeed.
                </p>
              </div>
              <div className="space-x-4">
                <DialogLogin />
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Key Features
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <BookOpen className="text-primary h-12 w-12" />
                  <h3 className="text-xl font-bold">Rich Course Content</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Access a wide variety of multimedia learning materials.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Users className="text-primary h-12 w-12" />
                  <h3 className="text-xl font-bold">Collaborative Learning</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Engage with peers and instructors through forums and live
                    sessions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Award className="text-primary h-12 w-12" />
                  <h3 className="text-xl font-bold">Certifications</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Earn recognized certificates upon course completion.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <BarChart className="text-primary h-12 w-12" />
                  <h3 className="text-xl font-bold">Progress Tracking</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Monitor your learning journey with detailed analytics.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Learners Say
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <p className="mb-4 text-gray-500 dark:text-gray-400">
                    "EduLMS has transformed the way I learn. The interactive
                    courses and supportive community have helped me achieve my
                    goals."
                  </p>
                  <p className="font-semibold">Sarah J., Data Scientist</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="mb-4 text-gray-500 dark:text-gray-400">
                    "As an instructor, I find EduLMS incredibly intuitive. It
                    allows me to create engaging content and track my students'
                    progress effectively."
                  </p>
                  <p className="font-semibold">Dr. Michael L., Professor</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="mb-4 text-gray-500 dark:text-gray-400">
                    "The certification programs on EduLMS have boosted my
                    career. The skills I've gained are directly applicable to my
                    job."
                  </p>
                  <p className="font-semibold">Alex T., Software Engineer</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <PreviewMarquee />
        <section className="w-full bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Start Learning?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join thousands of learners and transform your skills with
                  EduLMS. Sign up now for a free trial.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Sign Up</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By signing up, you agree to our Terms & Conditions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 EduLMS. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
