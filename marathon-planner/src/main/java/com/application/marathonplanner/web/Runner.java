package com.application.marathonplanner.web;

public class Runner {
    private double weeklyIncrease;
    private boolean isMetric;
    private double startingWeeklyDistance;
    private double goalDistance;

    public double getWeeklyIncrease() {
        return this.weeklyIncrease;
    }

    public boolean getIsMetric() {
        return this.isMetric;
    }

    public double getStartingWeeklyDistance() {
        return this.startingWeeklyDistance;
    }

    public double getGoalDistance() {
        return this.goalDistance;
    }
}
