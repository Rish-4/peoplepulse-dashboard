import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { MetricCard } from "@/components/ui/metric-card";
import { WorkforceChart } from "@/components/charts/workforce-chart";
import { PerformanceChart } from "@/components/charts/performance-chart";
import { 
  Users, 
  UserPlus, 
  TrendingDown, 
  Heart, 
  Calendar,
  DollarSign,
  Trophy,
  Clock
} from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">HR Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Welcome back! Here's what's happening with your workforce today.
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total Employees"
            value="1,247"
            change="+12 this month"
            changeType="positive"
            icon={Users}
            gradient="primary"
          />
          <MetricCard
            title="New Hires"
            value="23"
            change="+15% from last month"
            changeType="positive"
            icon={UserPlus}
            gradient="success"
          />
          <MetricCard
            title="Attrition Rate"
            value="4.2%"
            change="-0.8% from last month"
            changeType="positive"
            icon={TrendingDown}
            gradient="warning"
          />
          <MetricCard
            title="Engagement Score"
            value="87%"
            change="+3% from last month"
            changeType="positive"
            icon={Heart}
            gradient="info"
          />
        </div>

        {/* Secondary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Average Tenure"
            value="3.2 years"
            change="Stable"
            changeType="neutral"
            icon={Clock}
            gradient="primary"
          />
          <MetricCard
            title="Performance Rating"
            value="4.1/5"
            change="+0.2 from last quarter"
            changeType="positive"
            icon={Trophy}
            gradient="success"
          />
          <MetricCard
            title="Training Hours"
            value="12,540"
            change="+25% this quarter"
            changeType="positive"
            icon={Calendar}
            gradient="warning"
          />
          <MetricCard
            title="Avg. Salary"
            value="$78,500"
            change="+5% from last year"
            changeType="positive"
            icon={DollarSign}
            gradient="info"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <WorkforceChart />
          <PerformanceChart />
        </div>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card rounded-lg p-6 shadow-card">
            <h3 className="font-semibold text-foreground mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                <span className="text-muted-foreground">5 new employees onboarded</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                <span className="text-muted-foreground">Performance reviews due: 12</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-info rounded-full mr-3"></div>
                <span className="text-muted-foreground">Training sessions completed: 45</span>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-card">
            <h3 className="font-semibold text-foreground mb-4">Upcoming Events</h3>
            <div className="space-y-3">
              <div className="text-sm">
                <div className="font-medium text-foreground">Q2 Performance Reviews</div>
                <div className="text-muted-foreground">Starts in 5 days</div>
              </div>
              <div className="text-sm">
                <div className="font-medium text-foreground">Leadership Training</div>
                <div className="text-muted-foreground">Next week</div>
              </div>
              <div className="text-sm">
                <div className="font-medium text-foreground">Company All-Hands</div>
                <div className="text-muted-foreground">June 15th</div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-card">
            <h3 className="font-semibold text-foreground mb-4">Top Performers</h3>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs font-medium">JS</span>
                </div>
                <div>
                  <div className="font-medium text-foreground">Jane Smith</div>
                  <div className="text-muted-foreground">Engineering</div>
                </div>
              </div>
              <div className="flex items-center text-sm">
                <div className="w-8 h-8 bg-gradient-success rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs font-medium">MD</span>
                </div>
                <div>
                  <div className="font-medium text-foreground">Mike Davis</div>
                  <div className="text-muted-foreground">Sales</div>
                </div>
              </div>
              <div className="flex items-center text-sm">
                <div className="w-8 h-8 bg-gradient-warning rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs font-medium">LJ</span>
                </div>
                <div>
                  <div className="font-medium text-foreground">Lisa Johnson</div>
                  <div className="text-muted-foreground">Marketing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
