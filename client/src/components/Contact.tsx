import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin, Linkedin, Github, BarChart2, Database, Code } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "analysis",
    timeline: "",
    budget: "",
    message: "",
  });

  const projectTypes = [
    { value: "analysis", label: "Data Analysis", icon: <BarChart2 className="h-4 w-4" /> },
    { value: "engineering", label: "Data Engineering", icon: <Database className="h-4 w-4" /> },
    { value: "viz", label: "Data Visualization", icon: <Code className="h-4 w-4" /> },
    { value: "other", label: "Other", icon: null },
  ];

  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "📊 Project Inquiry Received!",
        description: "I'll analyze your requirements and get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        projectType: "analysis",
        timeline: "",
        budget: "",
        message: "",
      });
    },
    onError: (error: any) => {
      toast({
        title: "❌ Submission Error",
        description: error.message || "Please check your inputs and try again.",
        variant: "destructive",
      });
    },
  });

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email required";
    if (!formData.message.trim()) newErrors.message = "Project details are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      contactMutation.mutate(formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight"
          >
            Data-Driven Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Let's transform your data into actionable insights. Share your project details and I'll provide a tailored proposal.
          </motion.p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <Card className="border-none shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <BarChart2 className="text-primary" />
                  <span>Analyst Profile</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  {
                    icon: <Mail className="text-primary h-5 w-5" />,
                    title: "Professional Email",
                    value: "mhnayem01@gmail.com",
                  },
                  {
                    icon: <Phone className="text-primary h-5 w-5" />,
                    title: "Phone",
                    value: "+880 1638 001725",
                  },
                  {
                    icon: <MapPin className="text-primary h-5 w-5" />,
                    title: "Service Coverage",
                    value: "Global (Remote)",
                  },
                ].map(({ icon, title, value }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="mt-0.5" aria-hidden>{icon}</div>
                    <div>
                      <h4 className="text-base font-medium text-slate-800">{title}</h4>
                      <p className="text-slate-600 text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Database className="text-primary" />
                  <span>Connect Professionally</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-3">
                  <a
  href="https://www.linkedin.com/in/mahadihasannayeem/" 
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit my LinkedIn profile"
>
  <Button
    variant="outline"
    size="sm"
    className="gap-2 hover:bg-blue-50 hover:text-blue-600 transition-colors"
  >
    <Linkedin className="h-4 w-4" />
    <span>LinkedIn</span>
  </Button>
</a>
<a
  href="https://github.com/mhnayeem001"
  target="_blank"
  rel="noopener noreferrer nofollow"
  aria-label="Visit my GitHub profile"
>
  <Button
    variant="outline"
    size="sm"
    className="gap-2 hover:bg-gray-50 hover:text-gray-800 transition-colors"
  >
    <Github className="h-4 w-4" />
    <span>GitHub</span>
  </Button>
</a>
                </div>

                {/* Enhanced Thank You Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                  className="mt-6 p-6 bg-gradient-to-br from-blue-50/80 to-purple-50/80 rounded-lg border border-blue-200 shadow-inner"
                >
                  <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="text-center space-y-3"
                  >
                    <motion.h3 
                      className="text-xl font-semibold text-blue-800"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      Thank You for Visiting!
                    </motion.h3>
                    <motion.p
                      className="text-blue-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      I truly appreciate you taking the time to explore my portfolio.
                    </motion.p>
                    <motion.p
                      className="text-sm text-blue-500 mt-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.0 }}
                    >
                      Feel free to reach out if you have any questions or would like to discuss potential collaborations.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                      className="mt-4"
                    >
                      <div className="inline-block animate-pulse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-400"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Project Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Card className="shadow-lg border-none">
              <CardHeader>
                <CardTitle className="text-xl">Project Inquiry Form</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Alex Johnson"
                      aria-invalid={!!errors.name}
                      aria-describedby="name-error"
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-xs text-red-600">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">Work Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      aria-invalid={!!errors.email}
                      aria-describedby="email-error"
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label>Project Type</Label>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {projectTypes.map((type) => (
                        <Button
                          key={type.value}
                          variant={formData.projectType === type.value ? "default" : "outline"}
                          size="sm"
                          type="button"
                          onClick={() => setFormData({...formData, projectType: type.value})}
                          className="flex items-center gap-2"
                        >
                          {type.icon}
                          {type.label}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="timeline">Timeline</Label>
                      <Input
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        placeholder="e.g., 2 weeks"
                      />
                    </div>
                    <div>
                      <Label htmlFor="budget">Budget Range</Label>
                      <Input
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        placeholder="e.g., $1,000-$2,000"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your data needs, objectives, and any specific requirements..."
                      aria-invalid={!!errors.message}
                      aria-describedby="message-error"
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-xs text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Analyzing Requirements...
                      </span>
                    ) : (
                      "Get Data Proposal"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;