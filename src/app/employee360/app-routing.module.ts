import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
Guards can be added as an array. Because of this you can add multiple guards,
which will be executed in a sequence and only let the user see the page if all of them returns true.
The guard is also an Injectable class, so we need to add it to our bootstrap.
*/
import { AuthGuard } from './_guards/auth.guard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './shared/layout/layout.component';

// admin
import { RewardAddComponent } from './admin/habitat-rewards/reward-add/reward-add.component';
import { RewardListComponent } from './admin/habitat-rewards/reward-list/reward-list.component';
import { RewardApproveComponent } from './admin/habitat-rewards/reward-approve/reward-approve.component';
import { MentorListComponent } from './admin/mentorship-management/mentor-list/mentor-list.component';
import { MentorApplicantsComponent } from './admin/mentorship-management/mentor-applicants/mentor-applicants.component';
import { AdminToolsHabitatRewardsMgtApproveComponent } from './admin/admin-tools-habitat-rewards-mgt-approve/admin-tools-habitat-rewards-mgt-approve.component';
import { AdminToolsHabitatRewardsMgtCreateComponent } from './admin/admin-tools-habitat-rewards-mgt-create/admin-tools-habitat-rewards-mgt-create.component';
import { AdminToolsHabitatRewardsMgtViewComponent } from './admin/admin-tools-habitat-rewards-mgt-view/admin-tools-habitat-rewards-mgt-view.component';
import { AdminToolsHabitatMentorshipComponent } from './admin/admin-tools-habitat-mentorship/admin-tools-habitat-mentorship.component';
import { AdminToolsConfigComponent } from './admin/admin-tools-config/admin-tools-config.component';
import { AdminToolsHabitatFeedbackCreateVoiceComponent } from './admin/admin-tools-habitat-feedback-create-voice/admin-tools-habitat-feedback-create-voice.component';
import { AdminToolsHabitatFeedbackCreateWrittenComponent } from './admin/admin-tools-habitat-feedback-create-written/admin-tools-habitat-feedback-create-written.component';
import { AdminToolsPermissionsComponent } from './admin/admin-tools-permissions/admin-tools-permissions.component';
import { AdminToolsGivingComponent } from './admin/admin-tools-giving/admin-tools-giving.component';
import { AdminTransactionsComponent } from './admin/admin-transactions/admin-transactions.component';


// habitat
import { HabitatDashboardComponent } from './habitat/habitat-dashboard/habitat-dashboard.component';
import { HabitatRewardsComponent } from './habitat/habitat-rewards/habitat-rewards.component';
import { HabitatDiversityComponent } from './habitat/habitat-diversity/habitat-diversity.component';
import { HabitatDiversityPostDetailComponent } from './habitat/habitat-diversity-post-detail/habitat-diversity-post-detail.component';
import { HabitatHowsItGoingComponent } from './habitat/habitat-hows-it-going/habitat-hows-it-going.component';
import { HabitatLockboxComponent } from './habitat/habitat-lockbox/habitat-lockbox.component';
import { HabitatLockboxComplaintComponent } from './habitat/habitat-lockbox-complaint/habitat-lockbox-complaint.component';
import { HabitatMentorshipComponent } from './habitat/habitat-mentorship/habitat-mentorship.component';
import { HabitatPerformanceReviewComponent } from './habitat/habitat-performance-review/habitat-performance-review.component';
import { HabitatVoiceSurveysComponent } from './habitat/habitat-voice-surveys/habitat-voice-surveys.component';
import { HabitatWrittenSurveysComponent } from './habitat/habitat-written-surveys/habitat-written-surveys.component';
import { HabitatWrittenSurveyExampleComponent } from './habitat/habitat-written-survey-example/habitat-written-survey-example.component';
import { HabitatVoiceSurveyExampleComponent } from './habitat/habitat-voice-survey-example/habitat-voice-survey-example.component';
import { HabitatMyhrComponent } from './habitat/habitat-myhr/habitat-myhr.component';
import { HabitatSuggestionBoxComponent } from './habitat/habitat-suggestion-box/habitat-suggestion-box.component';
import { HabitatSuggestionBoxEmptyComponent } from './habitat/habitat-suggestion-box-empty/habitat-suggestion-box-empty.component';
import { HabitatMentorshipFirstTimeComponent } from './habitat/habitat-mentorship-first-time/habitat-mentorship-first-time.component';
import { HabitatSurveyWhatsOnYourMindComponent } from './habitat/habitat-survey-whats-on-your-mind/habitat-survey-whats-on-your-mind.component';

// giving
import { GivingDashboardComponent } from './giving/giving-dashboard/giving-dashboard.component';
import { GivingGetInvolvedComponent } from './giving/giving-get-involved/giving-get-involved.component';
import { GivingLeaderboardComponent } from './giving/giving-leaderboard/giving-leaderboard.component';
import { GivingFaqComponent } from './giving/giving-faq/giving-faq.component';
import { GivingOpportunityComponent } from './giving/giving-opportunity/giving-opportunity.component';
import { GivingDashboardManageYourDonationsComponent } from './giving/giving-dashboard-manage-your-donations/giving-dashboard-manage-your-donations.component';
import { GivingDashboardManageVolunteeringComponent } from './giving/giving-dashboard-manage-volunteering/giving-dashboard-manage-volunteering.component';
import { GivingDonationReceiptComponent } from './giving/giving-donation-receipt/giving-donation-receipt.component';
import { GivingVolReceiptComponent } from './giving/giving-vol-receipt/giving-vol-receipt.component';
import { GivingNpoComponent } from './giving/giving-npo/giving-npo.component';
import { GivingVolunteerComponent } from './giving/giving-volunteer/giving-volunteer.component';
import { GivingFundraiserComponent } from './giving/giving-fundraiser/giving-fundraiser.component';
import { GivingFindNpoComponent } from './giving/giving-find-npo/giving-find-npo.component';
import { GivingPageComponent } from './giving/giving-page/giving-page.component';

// social
import { SocialDashboardComponent } from './social/social-dashboard/social-dashboard.component';
import { SocialLeaderboardComponent } from './social/social-leaderboard/social-leaderboard.component';

// wellbeing
import { WellbeingDashboardComponent } from './wellbeing/wellbeing-dashboard/wellbeing-dashboard.component';
import { WellbeingNutritionTrackerComponent } from './wellbeing/wellbeing-nutrition-tracker/wellbeing-nutrition-tracker.component';
import { WellbeingSomedayComponent } from './wellbeing/wellbeing-someday/wellbeing-someday.component';
import { WellbeingWeightTrackerComponent } from './wellbeing/wellbeing-weight-tracker/wellbeing-weight-tracker.component';
import { WellbeingWaterTrackerComponent } from './wellbeing/wellbeing-water-tracker/wellbeing-water-tracker.component';

// wellbeing-mental
import { WellbeingNavbarComponent } from './wellbeing/wellbeing-navbar/wellbeing-navbar.component';
import { WellbeingUdemyFirstTimeDashboardComponent } from './wellbeing/mental/wellbeing-udemy-first-time-dashboard/wellbeing-udemy-first-time-dashboard.component';
import { WellbeingUdemyLandingComponent } from './wellbeing/mental/wellbeing-udemy-landing/wellbeing-udemy-landing.component';
import { WellbeingUdemyMyCoursesComponent } from './wellbeing/mental/wellbeing-udemy-my-courses/wellbeing-udemy-my-courses.component';
import { WellbeingUdemyCourseComponent } from './wellbeing/mental/wellbeing-udemy-course/wellbeing-udemy-course.component';
import { WellbeingUdemyCourseDetailComponent } from './wellbeing/mental/wellbeing-udemy-course-detail/wellbeing-udemy-course-detail.component';
import { WellbeingUdemyShoppingCartEmptyComponent } from './wellbeing/mental/wellbeing-udemy-shopping-cart-empty/wellbeing-udemy-shopping-cart-empty.component';
import { WellbeingUdemyShoppingCartFilledComponent } from './wellbeing/mental/wellbeing-udemy-shopping-cart-filled/wellbeing-udemy-shopping-cart-filled.component';

// wellbeing-physical
import { WellbeingIncentfitPtsGymReimbLogActivityComponent } from './wellbeing/physical/wellbeing-incentfit-pts-gym-reimb-log-activity/wellbeing-incentfit-pts-gym-reimb-log-activity.component';
import { WellbeingIncentfitPtsGymReimbComponent } from './wellbeing/physical/wellbeing-incentfit-pts-gym-reimb/wellbeing-incentfit-pts-gym-reimb.component';
import { WellbeingIncentfitMembershipsAddGymComponent } from './wellbeing/physical/wellbeing-incentfit-memberships-add-gym/wellbeing-incentfit-memberships-add-gym.component';
import { WellbeingIncentfitMembershipsComponent } from './wellbeing/physical/wellbeing-incentfit-memberships/wellbeing-incentfit-memberships.component';
import { WellbeingIncentfitFitnessChallengesViewComponent } from './wellbeing/physical/wellbeing-incentfit-fitness-challenges-view/wellbeing-incentfit-fitness-challenges-view.component';
import { WellbeingIncentfitFitnessChallengesComponent } from './wellbeing/physical/wellbeing-incentfit-fitness-challenges/wellbeing-incentfit-fitness-challenges.component';

//wellbeing-incentfit
import { IncentfitComponent } from './wellbeing/incentfit/incentfit/incentfit.component';

// user
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserNotificationsComponent } from './user/user-notifications/user-notifications.component';

// onboarding
import { UserInvitedStepsComponent } from './onboarding/user-invited-steps/user-invited-steps.component';
// Help
import { HelpComponent } from './help/help/help.component';
import { HelpFaqComponent } from './help/help-faq/help-faq.component';
import { HelpEarningsComponent } from './help/help-earnings/help-earnings.component';
import { EarningDescriptionComponent } from './help/earning-description/earning-description.component';
// User-Settings
import { UserSettingsYourWalletComponent } from './settings/user-settings-your-wallet/user-settings-your-wallet.component';
import { UserSettingsSocialPreferencesComponent } from './settings/user-settings-social-preferences/user-settings-social-preferences.component';
import { UserSettingsPrivacyComponent } from './settings/user-settings-privacy/user-settings-privacy.component';
import { UserSettingsYourWalletMakeDefaultComponent } from './settings/user-settings-your-wallet-make-default/user-settings-your-wallet-make-default.component';
// feed
import { FeedLeaderboardComponent } from './home/most-engaged/feed-leaderboard/feed-leaderboard.component';
// admin-user
import { UsersComponent } from './admin/user/users/users.component';
import { UsersUploadComponent } from './admin/user/users-upload/users-upload.component';

//Gerties
import { HallOfGertieComponent } from './gerties/hall-of-gertie/hall-of-gertie.component';

//messenger
import { MessengerViewFilesComponent } from './messenger/messenger-view-files/messenger-view-files.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
      // social
      { path: 'social', canActivate: [AuthGuard], component: SocialDashboardComponent },
      { path: 'social-leaderboard', canActivate: [AuthGuard], component: SocialLeaderboardComponent },

      // admin
      { path: 'rewards', canActivate: [AuthGuard], component: RewardListComponent },
      { path: 'rewards/create', canActivate: [AuthGuard], component: RewardAddComponent },
      { path: 'mentor-applicants', canActivate: [AuthGuard], component: MentorApplicantsComponent },
      { path: 'approve', canActivate: [AuthGuard], component: RewardApproveComponent },
      { path: 'mentors', canActivate: [AuthGuard], component: MentorListComponent },
      { path: 'admin-tools-habitat-rewards-mgt-approve', component: AdminToolsHabitatRewardsMgtApproveComponent },
      { path: 'admin-tools-habitat-rewards-mgt-create', component: AdminToolsHabitatRewardsMgtCreateComponent },
      { path: 'admin-tools-habitat-rewards-mgt-view', component: AdminToolsHabitatRewardsMgtViewComponent },
      { path: 'admin-tools-habitat-mentorship', component: AdminToolsHabitatMentorshipComponent },
      { path: 'admin-tools-config', component: AdminToolsConfigComponent },
      { path: 'admin-tools-habitat-feedback-create-voice', component: AdminToolsHabitatFeedbackCreateVoiceComponent },
      { path: 'admin-tools-habitat-feedback-create-written', component: AdminToolsHabitatFeedbackCreateWrittenComponent },
      { path: 'admin-tools-permissions', component: AdminToolsPermissionsComponent },
      { path: 'admin-tools-giving', component: AdminToolsGivingComponent },
      { path: 'admin-transactions', component: AdminTransactionsComponent },

      // wellbeing
      { path: 'wellbeing', canActivate: [AuthGuard], component: WellbeingDashboardComponent },
      { path: 'wellbeing-nutrition-tracker', canActivate: [AuthGuard], component: WellbeingNutritionTrackerComponent },
      { path: 'wellbeing-someday', canActivate: [AuthGuard], component: WellbeingSomedayComponent },
      { path: 'wellbeing-weight-tracker', canActivate: [AuthGuard], component: WellbeingWeightTrackerComponent },
      { path: 'wellbeing-water-tracker', canActivate: [AuthGuard], component: WellbeingWaterTrackerComponent },

      // wellbeing-mental
      { path: 'wellbeing-navbar', canActivate: [AuthGuard], component: WellbeingNavbarComponent },
      { path: 'wellbeing-udemy-first-time', canActivate: [AuthGuard], component: WellbeingUdemyFirstTimeDashboardComponent },
      { path: 'wellbeing-udemy', canActivate: [AuthGuard], component: WellbeingUdemyLandingComponent },
      { path: 'wellbeing-udemy-my-courses', canActivate: [AuthGuard], component: WellbeingUdemyMyCoursesComponent },
      { path: 'wellbeing-udemy-course', canActivate: [AuthGuard], component: WellbeingUdemyCourseComponent },
      { path: 'wellbeing-udemy-course-detail', canActivate: [AuthGuard], component: WellbeingUdemyCourseDetailComponent },
      { path: 'wellbeing-udemy-shopping-cart-empty', canActivate: [AuthGuard], component: WellbeingUdemyShoppingCartEmptyComponent },
      { path: 'wellbeing-udemy-shopping-cart-filled', canActivate: [AuthGuard], component: WellbeingUdemyShoppingCartFilledComponent },

      // wellbeing-physical
      { path: 'wellbeing-incentfit-pts-gym-reimb-log-activity', canActivate: [AuthGuard], component: WellbeingIncentfitPtsGymReimbLogActivityComponent },
      { path: 'wellbeing-incentfit-pts-gym-reimb', canActivate: [AuthGuard], component: WellbeingIncentfitPtsGymReimbComponent },
      { path: 'wellbeing-incentfit-memberships-add-gym', canActivate: [AuthGuard], component: WellbeingIncentfitMembershipsAddGymComponent },
      { path: 'wellbeing-incentfit-memberships', canActivate: [AuthGuard], component: WellbeingIncentfitMembershipsComponent },
      { path: 'wellbeing-incentfit-fitness-challenges-view', canActivate: [AuthGuard], component: WellbeingIncentfitFitnessChallengesViewComponent },
      { path: 'wellbeing-incentfit-fitness-challenges', canActivate: [AuthGuard], component: WellbeingIncentfitFitnessChallengesComponent },

//wellbeing-incentfit
{ path: 'incentfit', canActivate: [AuthGuard], component: IncentfitComponent },

      // habitat
      { path: 'habitat', canActivate: [AuthGuard], component: HabitatDashboardComponent },
      { path: 'habitat-rewards', canActivate: [AuthGuard], component: HabitatRewardsComponent },
      { path: 'habitat-diversity', canActivate: [AuthGuard], component: HabitatDiversityComponent },
      { path: 'habitat-diversity-post-detail', canActivate: [AuthGuard], component: HabitatDiversityPostDetailComponent },
      { path: 'habitat-hows-it-going', canActivate: [AuthGuard], component: HabitatHowsItGoingComponent },
      { path: 'habitat-lockbox', canActivate: [AuthGuard], component: HabitatLockboxComponent },
      { path: 'habitat-lockbox-complaint', canActivate: [AuthGuard], component: HabitatLockboxComplaintComponent },
      { path: 'habitat-mentorship', canActivate: [AuthGuard], component: HabitatMentorshipComponent },
      { path: 'habitat-performance-review', canActivate: [AuthGuard], component: HabitatPerformanceReviewComponent },
      { path: 'habitat-voice-surveys', canActivate: [AuthGuard], component: HabitatVoiceSurveysComponent },
      { path: 'habitat-written-surveys', canActivate: [AuthGuard], component: HabitatWrittenSurveysComponent },
      { path: 'habitat-voice-survey-example', canActivate: [AuthGuard], component: HabitatVoiceSurveyExampleComponent },
      { path: 'habitat-written-survey-example', canActivate: [AuthGuard], component: HabitatWrittenSurveyExampleComponent },
      { path: 'habitat', component: HabitatDashboardComponent },
      { path: 'habitat-rewards', component: HabitatRewardsComponent },
      { path: 'habitat-diversity', component: HabitatDiversityComponent },
      { path: 'habitat-diversity-post-detail', component: HabitatDiversityPostDetailComponent },
      { path: 'habitat-hows-it-going', component: HabitatHowsItGoingComponent },
      { path: 'habitat-lockbox', component: HabitatLockboxComponent },
      { path: 'habitat-lockbox-complaint', component: HabitatLockboxComplaintComponent },
      { path: 'habitat-mentorship', component: HabitatMentorshipComponent },
      { path: 'habitat-performance-review', component: HabitatPerformanceReviewComponent },
      { path: 'habitat-voice-surveys', component: HabitatVoiceSurveysComponent },
      { path: 'habitat-written-surveys', component: HabitatWrittenSurveysComponent },
      { path: 'habitat-voice-survey-example', component: HabitatVoiceSurveyExampleComponent },
      { path: 'habitat-written-survey-example', component: HabitatWrittenSurveyExampleComponent },
      { path: 'habitat-suggestion-box', component: HabitatSuggestionBoxComponent },
      { path: 'habitat-suggestion-box-empty', component: HabitatSuggestionBoxEmptyComponent },
      { path: 'habitat-mentorship-first-time', component: HabitatMentorshipFirstTimeComponent },
      { path: 'habitat-myhr', component: HabitatMyhrComponent },
{ path: 'habitat-survey-whats-on-your-mind', component: HabitatSurveyWhatsOnYourMindComponent },

      // giving
      { path: 'giving', canActivate: [AuthGuard], component: GivingDashboardComponent },
      { path: 'giving-get-involved', canActivate: [AuthGuard], component: GivingGetInvolvedComponent },
      { path: 'giving-leaderboard', canActivate: [AuthGuard], component: GivingLeaderboardComponent },
      { path: 'giving-faq', canActivate: [AuthGuard], component: GivingFaqComponent },
      { path: 'giving-opportunity', canActivate: [AuthGuard], component: GivingOpportunityComponent },
      { path: 'giving-opportunity/:id', canActivate: [AuthGuard], component: GivingOpportunityComponent },
      { path: 'giving-dashboard-manage-your-donations', canActivate: [AuthGuard], component: GivingDashboardManageYourDonationsComponent },
      { path: 'giving-dashboard-manage-volunteering', canActivate: [AuthGuard], component: GivingDashboardManageVolunteeringComponent },
      { path: 'giving-donation-receipt/:id', canActivate: [AuthGuard], component: GivingDonationReceiptComponent },
      { path: 'giving-vol-receipt/:id/:index', canActivate: [AuthGuard], component: GivingVolReceiptComponent },
      { path: 'giving-npo/:id', canActivate: [AuthGuard], component: GivingNpoComponent },
      { path: 'giving-find-npo', canActivate: [AuthGuard], component: GivingFindNpoComponent },
      { path: 'giving/:id', canActivate: [AuthGuard], component: GivingPageComponent },
      // user
      { path: 'user-profile', canActivate: [AuthGuard], component: UserProfileComponent },
      { path: 'user-notifications', canActivate: [AuthGuard], component: UserNotificationsComponent },
      // onboarding
      { path: 'onboarding-steps', component: UserInvitedStepsComponent },
      // help
      { path: 'help', component: HelpComponent },
      { path: 'help-faq', component: HelpFaqComponent },

      { path: 'help-earnings', component: HelpEarningsComponent },
      { path: 'help-earning-description', component: EarningDescriptionComponent },
      // user-settings
      { path: 'user-settings-your-wallet', component: UserSettingsYourWalletComponent },
      { path: 'user-settings-social-preferences', component: UserSettingsSocialPreferencesComponent },
      { path: 'user-settings-privacy', component: UserSettingsPrivacyComponent },
      { path: 'user-settings-your-wallet-make-default', component: UserSettingsYourWalletMakeDefaultComponent },
      // feed
      { path: 'feed-leaderboard', component: FeedLeaderboardComponent },
//Gertie
  { path: 'hall-of-gertie', component: HallOfGertieComponent },

//messenger
  { path: 'messenger-view-files', component: MessengerViewFilesComponent },

      // admin-user
      { path: 'users', component: UsersComponent },
      { path: 'users-upload', component: UsersUploadComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
