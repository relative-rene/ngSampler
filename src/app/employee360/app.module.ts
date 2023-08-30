import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
/**
 * SERVICES
 */
import { HttpClient } from './_services/http-client.service';

/**
 * DIRECTIVES
 */
// import { TrackScrollDirective } from './_directives/track-scroll.directive';

/**
 * ROUTES
 */
// shared
import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ToastComponent } from './shared/toast/toast.component';
import { CommentAddComponent } from './shared/comment-add/comment-add.component';
import { CommentDisplayComponent } from './shared/comment-display/comment-display.component';
import { NotificationDisplayComponent } from './shared/notification-display/notification-display.component';

// admin
import { RewardAddComponent } from './admin/habitat-rewards/reward-add/reward-add.component';
import { RewardListComponent } from './admin/habitat-rewards/reward-list/reward-list.component';
import { RewardApproveComponent } from './admin/habitat-rewards/reward-approve/reward-approve.component';
import { MentorListComponent } from './admin/mentorship-management/mentor-list/mentor-list.component';
import { SearchMentorComponent } from './modals/search-mentor/search-mentor.component';

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
import { HabitatMentorshipComponent } from './habitat/habitat-mentorship/habitat-mentorship.component';
import { HabitatPerformanceReviewComponent } from './habitat/habitat-performance-review/habitat-performance-review.component';
import { HabitatVoiceSurveysComponent } from './habitat/habitat-voice-surveys/habitat-voice-surveys.component';
import { HabitatWrittenSurveysComponent } from './habitat/habitat-written-surveys/habitat-written-surveys.component';
import { HabitatWrittenSurveyExampleComponent } from './habitat/habitat-written-survey-example/habitat-written-survey-example.component';
import { HabitatVoiceSurveyExampleComponent } from './habitat/habitat-voice-survey-example/habitat-voice-survey-example.component';
import { HabitatLockboxComplaintComponent } from './habitat/habitat-lockbox-complaint/habitat-lockbox-complaint.component';
import { HabitatMyhrComponent } from './habitat/habitat-myhr/habitat-myhr.component';
import { BecomeMentorComponent } from './modals/become-mentor/become-mentor.component';
import { IntroduceMeComponent } from './modals/introduce-me/introduce-me.component';
import { RewardRedeemConfirmationComponent } from './modals/reward-redeem-confirmation/reward-redeem-confirmation.component';
import { RewardRedeemThanksComponent } from './modals/reward-redeem-thanks/reward-redeem-thanks.component';
import { RewardEarnMorePtsComponent } from './modals/reward-earn-more-pts/reward-earn-more-pts.component';
import { RequestModalComponent } from './modals/request-modal/request-modal.component';
import { HabitatSuggestionBoxComponent } from './habitat/habitat-suggestion-box/habitat-suggestion-box.component';
import { HabitatSuggestionBoxEmptyComponent } from './habitat/habitat-suggestion-box-empty/habitat-suggestion-box-empty.component';
import { HabitatMentorshipFirstTimeComponent } from './habitat/habitat-mentorship-first-time/habitat-mentorship-first-time.component';
import { HabitatSurveyWhatsOnYourMindComponent } from './habitat/habitat-survey-whats-on-your-mind/habitat-survey-whats-on-your-mind.component';

// giving
import { GivingNavbarComponent } from './giving/giving-navbar/giving-navbar.component';
import { GivingDashboardComponent } from './giving/giving-dashboard/giving-dashboard.component';
import { GivingGetInvolvedComponent } from './giving/giving-get-involved/giving-get-involved.component';
import { GivingLeaderboardComponent } from './giving/giving-leaderboard/giving-leaderboard.component';
import { GivingOpportunityComponent } from './giving/giving-opportunity/giving-opportunity.component';
import { GivingFaqComponent } from './giving/giving-faq/giving-faq.component';
import { GivingDashboardManageYourDonationsComponent } from './giving/giving-dashboard-manage-your-donations/giving-dashboard-manage-your-donations.component';
import { GivingDashboardManageVolunteeringComponent } from './giving/giving-dashboard-manage-volunteering/giving-dashboard-manage-volunteering.component';
import { GivingDonationReceiptComponent } from './giving/giving-donation-receipt/giving-donation-receipt.component';
import { GivingVolReceiptComponent } from './giving/giving-vol-receipt/giving-vol-receipt.component';
import { GivingNpoComponent } from './giving/giving-npo/giving-npo.component';
import { GivingVolunteerComponent } from './giving/giving-volunteer/giving-volunteer.component';
import { GivingFundraiserComponent } from './giving/giving-fundraiser/giving-fundraiser.component';
import { GivingFindNpoComponent } from './giving/giving-find-npo/giving-find-npo.component';
import { GivingSearchResultComponent } from './giving/giving-search-result/giving-search-result.component';
import { GivingDashboardResultComponent } from './giving/giving-dashboard-result/giving-dashboard-result.component';
import { GivingDashboardResultSmallComponent } from './giving/giving-dashboard-result-small/giving-dashboard-result-small.component';
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

// pipes
import { TruncatePipe } from './_pipes/truncate.pipe';
import { RawHTML } from './_pipes/rawhtml.pipe';
import { DerpPipe } from './_pipes/derp.pipe';
// import { OrderBy } from './_pipes/orderby.pipe';

// user
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserNotificationsComponent } from './user/user-notifications/user-notifications.component';

// onboarding
import { UserInvitedStepsComponent } from './onboarding/user-invited-steps/user-invited-steps.component';
// help
import { HelpComponent } from './help/help/help.component';
import { HelpFaqComponent } from './help/help-faq/help-faq.component';
import { HelpEarningsComponent } from './help/help-earnings/help-earnings.component';
import { EarningDescriptionComponent } from './help/earning-description/earning-description.component';
// settings
import { UserSettingsYourWalletComponent } from './settings/user-settings-your-wallet/user-settings-your-wallet.component';
import { UserSettingsSocialPreferencesComponent } from './settings/user-settings-social-preferences/user-settings-social-preferences.component';
import { UserSettingsPrivacyComponent } from './settings/user-settings-privacy/user-settings-privacy.component';
import { UserSettingsYourWalletMakeDefaultComponent } from './settings/user-settings-your-wallet-make-default/user-settings-your-wallet-make-default.component';

// feed
import { FeedLeaderboardComponent } from './home/most-engaged/feed-leaderboard/feed-leaderboard.component';
import { CalenderComponent } from './modals/calender/calender.component';
import { HealthEventComponent } from './modals/health-event/health-event.component';
import { OpportunityComponent } from './modals/opportunity/opportunity.component';
import { UpcomingEventsComponent } from './modals/upcoming-events/upcoming-events.component';
import { SendAGertieComponent } from './modals/send-a-gertie/send-a-gertie.component';
import { OnboardingComponent } from './modals/onboarding/onboarding.component';
import { ShareInComponent } from './modals/share-in/share-in.component';
import { ShareOutComponent } from './modals/share-out/share-out.component';
import { PostComponent } from './modals/post/post.component';
import { AdminToolsHabitatMentorshipAddComponent } from './modals/admin-tools-habitat-mentorship-add/admin-tools-habitat-mentorship-add.component';

// admin-user
import { UsersComponent } from './admin/user/users/users.component';
import { UsersUploadComponent } from './admin/user/users-upload/users-upload.component';
import { HabitatSuggestionBoxSuggestComponent } from './modals/habitat-suggestion-box-suggest/habitat-suggestion-box-suggest.component';
import { FeedDisplayComponent } from './home/feed-display/feed-display.component';
import { WellbeingUdemyCourseAddToCartComponent } from './modals/wellbeing-udemy-course-add-to-cart/wellbeing-udemy-course-add-to-cart.component';
import { IncentfitComponent } from './wellbeing/incentfit/incentfit/incentfit.component';

//gerties
import { HallOfGertieComponent } from './gerties/hall-of-gertie/hall-of-gertie.component';

//messenger
import { MessengerViewFilesComponent } from './messenger/messenger-view-files/messenger-view-files.component';

@NgModule({
  // Declarables are the class types — components, directives, and pipes — that you can add to a module's declarations list. They're the only classes that you can add to declarations.
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    HabitatDashboardComponent,
    HabitatRewardsComponent,
    HabitatDiversityComponent,
    GivingDashboardComponent,
    SocialDashboardComponent,
    WellbeingDashboardComponent,
    HabitatDiversityPostDetailComponent,
    HabitatHowsItGoingComponent,
    HabitatLockboxComponent,
    HabitatMentorshipComponent,
    HabitatPerformanceReviewComponent,
    HabitatVoiceSurveysComponent,
    HabitatWrittenSurveysComponent,
    HabitatWrittenSurveyExampleComponent,
    HabitatVoiceSurveyExampleComponent,
    GivingGetInvolvedComponent,
    GivingLeaderboardComponent,
    GivingOpportunityComponent,
    GivingFaqComponent,
    GivingDashboardManageYourDonationsComponent,
    GivingDashboardManageVolunteeringComponent,
    GivingDonationReceiptComponent,
    GivingVolReceiptComponent,
    SocialLeaderboardComponent,
    WellbeingNutritionTrackerComponent,
    WellbeingSomedayComponent,
    GivingNavbarComponent,
    WellbeingWeightTrackerComponent,
    WellbeingWaterTrackerComponent,
    GivingNpoComponent,
    GivingVolunteerComponent,
    GivingFundraiserComponent,
    GivingFindNpoComponent,
    GivingSearchResultComponent,
    GivingDashboardResultComponent,
    GivingDashboardResultSmallComponent,
    GivingPageComponent,
    TruncatePipe,
    RawHTML,
    DerpPipe,
    HabitatLockboxComplaintComponent,
    UserProfileComponent,
    UserNotificationsComponent,
    RewardAddComponent,
    RewardListComponent,
    RewardApproveComponent,
    MentorListComponent,
    UserInvitedStepsComponent,
    HelpComponent,
    HelpFaqComponent,
    HelpEarningsComponent,
    EarningDescriptionComponent,
    UserSettingsYourWalletComponent,
    UserSettingsSocialPreferencesComponent,
    UserSettingsPrivacyComponent,
    HabitatMyhrComponent,
    UserSettingsYourWalletMakeDefaultComponent,
    WellbeingNavbarComponent,
    WellbeingUdemyFirstTimeDashboardComponent,
    WellbeingUdemyLandingComponent,
    FeedLeaderboardComponent,
    CalenderComponent,
    HealthEventComponent,
    OpportunityComponent,
    UpcomingEventsComponent,
    SendAGertieComponent,
    OnboardingComponent,
    ShareInComponent,
    ShareOutComponent,
    PostComponent,
    ToastComponent,
    CommentAddComponent,
    CommentDisplayComponent,
    NotificationDisplayComponent,
    UsersComponent,
    UsersUploadComponent,
    HabitatSuggestionBoxSuggestComponent,
    FeedDisplayComponent,
    WellbeingIncentfitPtsGymReimbLogActivityComponent,
    WellbeingIncentfitPtsGymReimbComponent,
    AdminToolsHabitatRewardsMgtApproveComponent,
    BecomeMentorComponent,
    IntroduceMeComponent,
    WellbeingIncentfitMembershipsAddGymComponent,
    WellbeingIncentfitMembershipsComponent,
    WellbeingIncentfitFitnessChallengesViewComponent,
    WellbeingIncentfitFitnessChallengesComponent,
    AdminToolsHabitatRewardsMgtCreateComponent,
    AdminToolsHabitatRewardsMgtViewComponent,
    MentorApplicantsComponent,
    SearchMentorComponent,
    AdminToolsHabitatMentorshipComponent,
    AdminToolsHabitatMentorshipAddComponent,
    WellbeingUdemyMyCoursesComponent,
    RewardRedeemConfirmationComponent,
    RewardRedeemThanksComponent,
    RewardEarnMorePtsComponent,
    WellbeingUdemyCourseComponent,
    WellbeingUdemyCourseDetailComponent,
    WellbeingUdemyShoppingCartEmptyComponent,
    WellbeingUdemyShoppingCartFilledComponent,
    AdminToolsConfigComponent,
    WellbeingUdemyCourseAddToCartComponent,
    AdminToolsHabitatFeedbackCreateVoiceComponent,
    AdminToolsHabitatFeedbackCreateWrittenComponent,
    AdminToolsPermissionsComponent,
    AdminTransactionsComponent,
    // OrderBy,
    HabitatSuggestionBoxComponent,
    HabitatSuggestionBoxEmptyComponent,
    HabitatMentorshipFirstTimeComponent,
    RequestModalComponent,
    HabitatSurveyWhatsOnYourMindComponent,
    AdminToolsGivingComponent,
    IncentfitComponent,
    HallOfGertieComponent,
    MessengerViewFilesComponent,
    // TrackScrollDirective,
  ],
  imports: [
    // Import modules whose public (exported) declarable classes you need to reference in this module's component templates.
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  // Providers of a bootstrapped module have application scope.
  // Adding a service provider to @NgModule.providers effectively publishes the service to the entire application.
  providers: [ToastComponent, HttpClient],
  bootstrap: [AppComponent]
})
export class Employee360Module { }
